const repairReducer = (state = {}, action) => {
  switch (action.type) {
    case "QUOTE":
      const newQuotation = {
        name: action.payload[0],
        email: action.payload[1],
        brand: action.payload[2],
        issue: action.payload[3],
        price: action.payload[4],
      };
      return { ...state, newQuotation };
    default:
      return state;
  }
};

export default repairReducer;
