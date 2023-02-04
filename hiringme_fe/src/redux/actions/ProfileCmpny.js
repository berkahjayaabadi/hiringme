import axios from "axios";

const getAllCompanyRequest = () => {
  return {
    type: "GET_ALL_DATA_COMPANY_REQUEST",
  };
};

const getAllCompanySuccess = (data) => {
  return {
    type: "GET_ALL_DATA_COMPANY_SUCCESS",
    payload: data,
  };
};

const getAllCompanyFail = (err) => {
  return {
    type: "GET_ALL_DATA_COMPANY_FAIL",
    payload: err,
  };
};

export const getAllCompany = () => {
  return (dispatch) => {
    dispatch(getAllCompanyRequest());
    return axios
      .get(`https://63dbba8ec45e08a0434c7f61.mockapi.io/Company`)
      .then((res) => {
        dispatch(getAllCompanySuccess(res.data));
      })
      .catch((err) => {
        dispatch(getAllCompanyFail(err.response.data));
      });
  };
};
