import React from "react";
import {Route, Routes} from "react-router-dom";
import KeepAlive from "react-activation";

import ProductPage from "../pages/ProductPage";
import RecentListPage from "../pages/RecentListPage";
import E404Page from "../pages/E404Page";

const RoutesIndex = () => {
  return (
    <>
      <Routes>
        <Route path="/product" element={<ProductPage />} />
        <Route
          path="/recentList"
          element={
            <KeepAlive>
              <RecentListPage />
            </KeepAlive>
          }
        />
        <Route path="*" element={<E404Page />} />
      </Routes>
    </>
  );
};

export default RoutesIndex;
