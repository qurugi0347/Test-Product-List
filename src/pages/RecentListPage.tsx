import React from "react";
import BaseLayout from "components/layout/base/BaseLayout";
import useBrandFilters from "components/RecentListPage/BrandFilters";

const RecentListPage = () => {
  const {selectedToggleList, render: BrandFilers} = useBrandFilters();
  console.log(selectedToggleList);

  return (
    <BaseLayout>
      <BrandFilers />
    </BaseLayout>
  );
};

export default RecentListPage;
