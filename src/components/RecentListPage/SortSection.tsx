import {useState, useMemo} from "react";
import styled from "styled-components";
import {SortType} from "api/sample";
import {getRecentProductIds} from "util/manageRecentProduct";
import sortSvg from "svg/common/sort.svg";
import SortSelectModal from "./SortSelectModal";

const useSortSection = () => {
  const [sortType, setSortType]: [SortType, any] = useState(SortType.RECENT);
  const [openModal, setOpenModal]: [boolean, any] = useState(false);
  const searchCount = useMemo(() => {
    return getRecentProductIds().length;
  }, []);

  const component = () => (
    <>
      <SectionWrapper>
        <SearchCount>조회한 상품 {searchCount}개</SearchCount>
        {useMemo(() => {
          let sortTypeText = "";
          switch (sortType as SortType) {
            case SortType.RECENT:
              sortTypeText = "최근 조회 순";
              break;
            case SortType.PRICE:
              sortTypeText = "가격 낮은 순";
              break;
            default:
          }
          return (
            <SortTypeButton
              onClick={() => {
                setOpenModal(true);
              }}>
              <SortIcon src={sortSvg} />
              <span>{sortTypeText}</span>
            </SortTypeButton>
          );
        }, [sortType])}
      </SectionWrapper>
      {useMemo(() => {
        if (!openModal) return null;
        return (
          <SortSelectModal
            selectedSort={sortType}
            onSelect={(newSortType: SortType) => {
              setSortType(newSortType);
              setOpenModal(false);
            }}
            onClose={() => {
              setOpenModal(false);
            }}
          />
        );
      }, [openModal])}
    </>
  );

  return {
    sortType,
    component,
  };
};

const SectionWrapper = styled.div`
  padding: 0 20px;
  display: grid;
  grid-template-columns: 1fr max-content;
  position: sticky;
  top: 63px;
  z-index: 2;
`;

const SearchCount = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  text-align: left;
  padding: 1px 0;
`;

const SortTypeButton = styled.button`
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  text-align: right;
  position: relative;
  & > span {
    line-height: 16px;
    padding: 2px 0;
    display: inline-block;
  }
`;

const SortIcon = styled.img`
  vertical-align: top;
`;

export default useSortSection;
