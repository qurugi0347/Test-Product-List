import {useState, useMemo} from "react";
import styled from "styled-components";
import {SortType} from "api/sample";
import ModalBase from "components/layout/ModalBase";
import classNameBuilder from "util/classNameBuilder";

interface SortSelectProps {
  selectedSort: SortType;
  onSelect: (newSortType: SortType) => void;
  onClose: () => void;
}

const selectSortTypeList = [
  {
    type: SortType.RECENT,
    name: "최근 조회 순",
  },
  {
    type: SortType.PRICE,
    name: "낮은 가격 순",
  },
];

const SortSelectModal = ({
  selectedSort,
  onSelect,
  onClose,
}: SortSelectProps) => {
  return (
    <ModalBase onClickBack={onClose}>
      <FilterWrapper>
        <Title>필터 정렬</Title>
        <Close onClick={onClose} />
        <SelectList>
          {selectSortTypeList.map((sortTypeItem) => {
            return (
              <SelectSortItem
                className={classNameBuilder({
                  selected: sortTypeItem.type === selectedSort,
                })}
                onClick={() => {
                  onSelect(sortTypeItem.type);
                }}>
                {sortTypeItem.name}
              </SelectSortItem>
            );
          })}
        </SelectList>
      </FilterWrapper>
    </ModalBase>
  );
};

const FilterWrapper = styled.div`
  width: 100%;
  height: 210px;
  bottom: 0;
  left: 0;
  position: fixed;
  border-radius: 20px 20px 0 0;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  padding: 0 10px;
  overflow: hidden;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  padding: 16px 10px;
`;

const Close = styled.button`
  display: block;
  position: absolute;
  width: 20px;
  height: 20px;
  top: 18px;
  right: 20px;

  ::after,
  ::before {
    display: block;
    content: " ";
    width: 2px;
    height: 26px;
    background: var(--black);
    transform: rotate(-45deg);
    position: absolute;
    top: -3px;
    right: 9px;
  }
  ::before {
    transform: rotate(45deg);
  }
`;

const SelectList = styled.div``;

const SelectSortItem = styled.div`
  cursort: pointer;
  padding: 10px 16px;
  border-raidus: 4px;
  &.selected {
    color: #1833ff;
    background: #e5e8ff;
  }
`;

export default SortSelectModal;
