interface IRandomProductProps {
  rejectIdx?: number;
}

const makeRandom = (): number => {
  return Math.floor(Math.random() * 100);
};

const getRandomProductIdx = (rejectIdx?: number): number => {
  let idx = makeRandom();
  if (typeof rejectIdx === "number") {
    while (idx === rejectIdx) {
      idx = makeRandom();
    }
  }
  return idx;
};

export default getRandomProductIdx;
