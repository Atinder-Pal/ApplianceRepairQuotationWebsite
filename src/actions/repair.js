export const quote = (quotingInfo) => {
  return {
    type: "QUOTE",
    payload: quotingInfo,
  };
};
