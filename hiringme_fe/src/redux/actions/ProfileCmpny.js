import axios from "axios";

const getAllCompanyRequest = () => {
  return {
    type: "GET_ALL_DATA_COMPANY_REQUEST",
  };
};

const getCompanySuccess = (data) => {
  return {
    type: "GET_ALL_DATA_COMPANY_SUCCESS",
    payload: data,
  };
};

const getCompanyFail = (err) => {
  return {
    type: "GET_ALL_DATA_COMPANY_FAIL",
    payload: err,
  };
};

export const getCompanyId = () => {
  return (dispatch) => {
    dispatch(getAllCompanyRequest());
    return axios
      .get(`https://63dbba8ec45e08a0434c7f61.mockapi.io/Company`)
      .then((res) => {
        dispatch(getCompanySuccess(res.data));
      })
      .catch((err) => {
        dispatch(getCompanyFail(err.response.data));
      });
  };
};
