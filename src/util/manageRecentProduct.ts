import dayjs from "dayjs";

export const getRecentProductIds = (): number[] => {
  const today = dayjs().format("YYYYMMDD");
  const recentProductData: Record<string, number[]> = JSON.parse(
    localStorage.getItem("recentProduct") ?? "{}",
  );
  const recentProductIds = recentProductData[today] ?? [];
  return recentProductIds;
};

export const appendRecentProductId = (id: number): void => {
  const productIds = getRecentProductIds();

  const newProductIds = productIds.filter((_id) => id !== _id);
  newProductIds.push(id);

  const today = dayjs().format("YYYYMMDD");
  const recentProductData: Record<string, number[]> = {};
  recentProductData[today] = newProductIds;

  localStorage.setItem("recentProduct", JSON.stringify(recentProductData));
};

export const getProductIdSortIndex = (): Record<string, number> => {
  const productIds = getRecentProductIds();
  const idIndexMap: Record<string, number> = {};
  productIds.forEach((productId, idx) => {
    idIndexMap[productId] = idx;
  });
  return idIndexMap;
};
