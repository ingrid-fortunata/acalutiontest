const initialState = {
  wineList: [],
  //   isListLoading: false,
};

const winelistingReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_WINELIST":
      return {
        ...state,
        wineList: [...action.payload],
      };
    default:
      return state;
  }
};

export default winelistingReducer;
