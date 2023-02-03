const initialState = { loading: false, data: [], error: [] };

export const editProfileIdReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "GET_ALL_DATA_PROFILE_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_ALL_DATA_PROFILE_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case "GET_ALL_DATA_PROFILE_FAIL":
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };

    default:
      return {
        state,
      };
  }
};
