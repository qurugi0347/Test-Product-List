import React, {useState, useMemo, useEffect, useCallback} from "react";

interface UseToggleProps {
  toggleList: string[];
  defaultSelected?: string[];
  canCheckAll?: boolean;
}

const useToggle = ({toggleList, defaultSelected = []}: UseToggleProps) => {
  const [selectedMap, setSelected]: [Record<string, boolean>, any] = useState(
    {},
  );

  const selectedList = useMemo(() => {
    return Object.keys(selectedMap).filter((val) => selectedMap[val]);
  }, [selectedMap]);

  const isAllSelected = useMemo(() => {
    const notSelected = Object.values(selectedMap).filter((val) => !val);
    return notSelected.length === 0;
  }, [selectedMap]);

  const toggleAll = useCallback(() => {
    const selectMap: Record<string, boolean> = {};
    toggleList.forEach((key) => {
      selectMap[key] = !isAllSelected;
    });
    setSelected(selectMap);
  }, [isAllSelected]);

  const toggleItem = useCallback(
    (toggleKey: string) => {
      setSelected((prevToggleMap: Record<string, boolean>) => {
        return {...prevToggleMap, [toggleKey]: !prevToggleMap[toggleKey]};
      });
    },
    [selectedMap],
  );

  const init = (defaultSelectAll: boolean) => {
    const defaultSelectMap: Record<string, boolean> = {};
    toggleList.forEach((key) => {
      defaultSelectMap[key] = defaultSelectAll ?? false;
    });
    defaultSelected.forEach((key) => {
      defaultSelectMap[key] = true;
    });
    setSelected(defaultSelectMap);
  };

  useEffect(() => {
    init(false);
  }, []);

  return {
    selectedMap,
    selectedList,
    toggleItem,
    toggleAll,
    isAllSelected,
    init,
  };
};

export default useToggle;
