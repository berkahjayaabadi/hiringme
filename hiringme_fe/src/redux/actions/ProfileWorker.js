import axios from "axios";
import { useParams } from "react-router-dom";

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
      .get(`http://localhost:5000/api/v1/profileDashboard/skill/1d4f1de3-b4bc-4987-87bd-a157f490d1f0`)
      .then((res) => {
        dispatch(getProfileSuccess(res.data));
      })
      .catch((err) => {
        dispatch(getProfileFail(err.response.data));
      });
  };
};

// Post

const postProfileSuccess = (data) => {
  return {
    type: "POST_ALL_DATA_PROFILE_SUCCESS",
    payload: data,
  };
};

const postProfileFail = (err) => {
  return {
    type: "POST_ALL_DATA_PROFILE_FAIL",
    payload: err,
  };
};

export const postProfile = (postData) => {
  return (dispatch) => {
    return axios({
      method: "Post",
      url: "https://63dbba8ec45e08a0434c7f61.mockapi.io/Worker",
      data: postData,
    })
      .then((res) => {
        dispatch(postProfileSuccess(res.data));
      })
      .catch((err) => {
        dispatch(postProfileFail(err.response.data));
      });
  };
};
