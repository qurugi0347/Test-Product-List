import React, {useEffect, useState} from "react";
import BaseLayout from "components/layout/base/BaseLayout";
import useBrandFilters from "components/RecentListPage/BrandFilters";
import ProductList from "components/RecentListPage/ProductList";
import {getBrandFilterdProducts, SortType, IProductData} from "api/sample";

const RecentListPage = () => {
  const {selectedToggleList, component: BrandFilters} = useBrandFilters();
  const [productData, setProductData]: [IProductData[], any] = useState([]);

  const getFilteredProductData = async () => {
    const filterdProduct = await getBrandFilterdProducts(
      selectedToggleList,
      SortType.RECENT,
    );
    setProductData(filterdProduct);
  };

  useEffect(() => {
    getFilteredProductData();
  }, [selectedToggleList]);

  console.log(productData);

  return (
    <BaseLayout>
      <>
        <BrandFilters />
        <ProductList data={productData} />
      </>
    </BaseLayout>
  );
};

export default RecentListPage;
