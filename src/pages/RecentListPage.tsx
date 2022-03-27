import React, {useEffect, useState} from "react";

import BaseLayout from "components/layout/base/BaseLayout";
import useBrandFilters from "components/RecentListPage/BrandFilters";
import ProductList from "components/RecentListPage/ProductList";
import useSortSection from "components/RecentListPage/SortSection";
import useScroll from "hooks/useScroll";

import {getRecentProducts, SortType, IProductData} from "api/sample";
import {getRecentProductIds} from "util/manageRecentProduct";

const RecentListPage = () => {
  const {selectedToggleList, component: BrandFilters} = useBrandFilters();
  const {sortType, component: SortSection} = useSortSection();

  const [productData, setProductData]: [IProductData[], any] = useState([]);
  const [page, setPage]: [number, any] = useState(1);
  const [maxPage, setMaxPage]: [number, any] = useState(1);
  const [dataLength, setDataLength]: [number, any] = useState(0);
  useScroll("contentWrapper", {
    onBottom: () => {
      setPage((prevPage: number) => prevPage + 1);
    },
  });

  const getFilteredProductData = async () => {
    const filteredProduct = await getRecentProducts({
      brandNames: selectedToggleList,
      sortType,
      productIds: getRecentProductIds(),
      page,
    });
    setMaxPage(filteredProduct.maxPage);
    setDataLength(filteredProduct.dataLength);
    setProductData((prev: IProductData[]) => prev.concat(filteredProduct.data));
  };

  useEffect(() => {
    setProductData([]);
    if (page === 1) {
      getFilteredProductData();
    } else {
      setPage(1);
    }
  }, [selectedToggleList, sortType]);

  useEffect(() => {
    if (maxPage >= page) {
      getFilteredProductData();
    }
  }, [page]);

  return (
    <BaseLayout>
      <>
        <BrandFilters />
        <SortSection searchCount={dataLength} />
        <ProductList data={productData} />
      </>
    </BaseLayout>
  );
};

export default RecentListPage;
