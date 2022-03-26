const classNameBuilder = (classMap: Record<string, boolean>): string => {
  return Object.keys(classMap)
    .filter((key) => classMap[key])
    .join(" ");
};

export default classNameBuilder;
