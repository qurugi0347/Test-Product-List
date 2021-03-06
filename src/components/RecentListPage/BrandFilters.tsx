import React, {useEffect, useState, ReactElement} from "react";
import styled from "styled-components";

import BaseButton from "components/ui/button";

import useToggle from "hooks/useToggle";
import classNameBuilder from "util/classNameBuilder";

import {getBrandLists} from "api/sample";

const useBrandFilters = (): {
  selectedToggleList: string[];
  resetBrandFilter: () => void;
  component: () => ReactElement;
} => {
  const [brandList, setBrandList]: [string[], any] = useState([]);
  const {
    selectedMap: selectedToggleMap,
    selectedList: selectedToggleList,
    toggleAll,
    toggleItem,
    isAllSelected,
    init: initToggle,
  } = useToggle({toggleList: brandList});

  const getBrandListData = async () => {
    const result = await getBrandLists();
    setBrandList(result);
  };

  useEffect(() => {
    initToggle(true);
  }, [brandList]);

  useEffect(() => {
    getBrandListData();
  }, []);

  const resetBrandFilter = () => {
    initToggle(true);
  };

  return {
    selectedToggleList,
    resetBrandFilter,
    component: () => (
      <FilterWrapper>
        <FilterButton
          className={classNameBuilder({
            small: true,
            selected: isAllSelected,
          })}
          onClick={() => {
            toggleAll();
          }}>
          전체
        </FilterButton>
        {brandList.map((brandName, idx) => {
          return (
            <FilterButton
              key={idx}
              className={classNameBuilder({
                small: true,
                selected: selectedToggleMap[brandName],
              })}
              onClick={() => {
                toggleItem(brandName);
              }}>
              {brandName}
            </FilterButton>
          );
        })}
      </FilterWrapper>
    ),
  };
};

const FilterWrapper = styled.div`
  position: sticky;
  top: 0;
  z-index: 2;
  width: 100%;
  overflow-x: scroll;
  white-space: nowrap;
  padding: 16px;
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const FilterButton = styled(BaseButton)`
  border-radius: 4px;
  border-color: var(--gray4);
  color: var(--gray3);
  &.selected {
    background: var(--black);
    border-color: var(--black);
    color: var(--white);
  }
  &:not(:first-child) {
    margin-left: 6px;
  }
`;

export default useBrandFilters;
