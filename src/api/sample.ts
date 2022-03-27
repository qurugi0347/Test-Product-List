import {getProductIdSortIndex} from "util/manageRecentProduct";
import responseData from "./data";

export enum SortType {
  RECENT = "recnet",
  PRICE = "price",
}

export interface IProductData {
  title: string;
  brand: string;
  price: number;
  id: number;
}

interface ProductByIdsDTO {
  productIds: number[];
}

interface FilteredProductsDTO extends ProductByIdsDTO {
  brandNames: string[];
  sortType: SortType;
  productIds: number[];
  page?: number;
}

interface PaginationResult<T> {
  page: number;
  data: T[];
  dataLength: number;
  maxPage: number;
  limit: number;
}

export const getProducts = async ({
  productIds,
}: ProductByIdsDTO): Promise<IProductData[]> => {
  const productIdsSet = new Set(productIds);
  return responseData.filter((productData) =>
    productIdsSet.has(productData.id),
  );
};

export const getProductDetail = async (idx: number): Promise<IProductData> => {
  return responseData[idx];
};

export const getBrandLists = async (): Promise<string[]> => {
  const brands = responseData.map((data) => {
    return data.brand;
  });
  const brandList: string[] = [];
  const brandSet = new Set(brands);
  brandSet.forEach((brandName) => {
    brandList.push(brandName);
  });
  return brandList;
};

export const getRecentProducts = async ({
  brandNames,
  sortType,
  productIds,
  page = 1,
}: FilteredProductsDTO): Promise<PaginationResult<IProductData>> => {
  const brandNameMap: Record<string, boolean> = {};
  brandNames.forEach((brandName) => {
    brandNameMap[brandName] = true;
  });
  const products = await getProducts({productIds});
  const sortIndex = getProductIdSortIndex();

  const filteredProducts = products
    .filter((product) => {
      return brandNameMap[product.brand];
    })
    .sort((a, b) => {
      if (sortType === SortType.RECENT) {
        // RECENT
        return sortIndex[`${b.id}`] - sortIndex[`${a.id}`];
      }
      if (sortType === SortType.PRICE) {
        // PRICE
        return a.price - b.price;
      }
      return 0;
    });
  const limit = 10;
  return {
    data: filteredProducts.slice((page - 1) * limit, page * limit),
    limit,
    maxPage: Math.ceil(filteredProducts.length / limit),
    page,
    dataLength: filteredProducts.length,
  };
};
