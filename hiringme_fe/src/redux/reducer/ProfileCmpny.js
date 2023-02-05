const initialState = { loading: false, data: [], error: [] };

export const CompanyReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "GET_ALL_DATA_COMPANY_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_ALL_DATA_COMPANY_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case "GET_ALL_DATA_COMPANY_FAIL":
      return {
        ...state,
        loading: false,
        data: [],
        error: action.payload,
      };
    case "GET_DATA_PROFILE_BY_ID_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "GET_DATA_PROFILE_BY_ID_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
      };
    case "GET_DATA_PROFILE_BY_ID_FAIL":
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
