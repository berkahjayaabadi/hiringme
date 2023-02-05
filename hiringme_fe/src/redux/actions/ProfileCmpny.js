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
      .get(
        `http://localhost:5000/api/v1/profileDashboard/skill/1d4f1de3-b4bc-4987-87bd-a157f490d1f0`
      )
      .then((res) => {
        dispatch(getAllCompanySuccess(res.data.data));
      })
      .catch((err) => {
        dispatch(getAllCompanyFail(err.response.data));
      });
  };
};

//Get By Id

const getCompanyByIdRequest = (id) => {
  return {
    type: "GET_DATA_COMPANY_BY_ID_REQUEST",
    payload: id,
  };
};

const getCompanyByIdSuccess = (data) => {
  return {
    type: "GET_DATA_COMPANY_BY_ID_SUCCESS",
    payload: data,
  };
};

const getCompanyByIdFail = (err) => {
  return {
    type: "GET_DATA_COMPANY_BY_ID_FAIL",
    payload: err,
  };
};

export const getCompanyById = (id) => {
  return (dispatch) => {
    dispatch(getCompanyByIdRequest(id));
    return axios
      .get(`http://localhost:5000/api/v1/profileDashboard/skill/${id}`)
      .then((res) => {
        dispatch(getCompanyByIdSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getCompanyByIdFail(err.response.data));
      });
  };
};
