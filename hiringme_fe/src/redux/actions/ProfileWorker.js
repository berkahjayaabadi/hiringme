import axios from "axios";

const getAllprofileRequest = () => {
  return {
    type: "GET_ALL_DATA_PROFILE_REQUEST",
  };
};

const getProfileSuccess = (data) => {
  return {
    type: "GET_ALL_DATA_PROFILE_SUCCESS",
    payload: data,
  };
};

const getProfileFail = (err) => {
  return {
    type: "GET_ALL_DATA_PROFILE_FAIL",
    payload: err,
  };
};

export const getProfileId = () => {
  return (dispatch) => {
    dispatch(getAllprofileRequest());
    return axios
      .get(`https://63dbba8ec45e08a0434c7f61.mockapi.io/Worker`)
      .then((res) => {
        dispatch(getProfileSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getProfileFail(err.response.data));
      });
  };
};
