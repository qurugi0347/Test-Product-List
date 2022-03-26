import React from "react";
import BaseLayout from "components/layout/base/BaseLayout";
import useBrandFilters from "components/RecentListPage/BrandFilters";

const RecentListPage = () => {
  const {selectedToggleList, component: BrandFilters} = useBrandFilters();

  return (
    <BaseLayout>
      <BrandFilters />
    </BaseLayout>
  );
};

export default RecentListPage;
