import axios from "@/utils/axios";
import {
  addUser,
  removeError,
  removeUser,
  post,
  savedPosts,
  isError,
} from "../Reducers/userReducers";
import { toast } from "react-toastify";
import { redirect } from "next/navigation";
export const asyncCurrentUser = () => async (dispatch, getstate) => {
  try {
    const { data } = await axios.get("/user");
    dispatch(addUser(data));
  } catch (error) {
    console.log(error);
    toast.error(error.response.data.message);
    dispatch(isError(error.response.data.message));
  }
};

export const asyncSignupUser = (user) => async (dispatch, getstate) => {
  try {
    const { data } = await axios.post("/user/signup", user);
    console.log(data);
    dispatch(asyncCurrentUser());
  } catch (error) {
    toast.error(error.response.data.message);
    dispatch(isError(error.response.data.message));
  }
};

export const asyncSigninUser = (user) => async (dispatch, getstate) => {
  try {
    const { data } = await axios.post("/user/signin", user);
    dispatch(asyncCurrentUser());
  } catch (error) {
    toast.error(error.response.data.message);
    dispatch(isError(error.response.data.message));
  }
};

export const asyncSignoutUser = (user) => async (dispatch, getstate) => {
  try {
    const { data } = await axios.get("/user/signout");
    dispatch(removeUser());
  } catch (error) {
    dispatch(isError(error.response.data.message));
  }
};

export const asyncFollowUser = (id) => async (dispatch, getstate) => {
  try {
    const { data } = await axios.post("/user/follow", id);
    dispatch(asyncCurrentUser());
  } catch (error) {
    console.log(error);
    // dispatch(isError(error.response.data.message));
  }
};

export const asyncUnFollowUser = (id) => async (dispatch, getstate) => {
  try {
    const { data } = await axios.post("/user/unfollow", id);
    dispatch(asyncCurrentUser());
  } catch (error) {
    console.log(error);
    // dispatch(isError(error.response.data.message));
  }
};

// export const asyncupdateuser = (user) => async (dispatch, getstate) => {
//   try {
//     const { _id } = getstate().userReducer.user;
//     const { data } = await axios.post(`/user/update/${_id}`, user);
//     // const { data } = await axios.post(`/user/update/`+_id,user);
//     dispatch(asynccurrentuser());
//   } catch (error) {
//     dispatch(iserror(error.response.data.message));
//   }
// };

// export const asyncavataruser = (user) => async (dispatch, getstate) => {
//   try {
//     const { _id } = getstate().userReducer.user;
//     const { data } = await axios.post(`/user/avatar/${_id}`, user);
//     // const { data } = await axios.post(`/user/avatar/`+_id,user);
//     dispatch(asynccurrentuser());
//   } catch (error) {
//     dispatch(iserror(error.response.data.message));
//   }
// };

// export const asyncresetpassworduser =
//   (password) => async (dispatch, getstate) => {
//     try {
//       const { _id } = getstate().userReducer.user;
//       const { data } = await axios.post(
//         `/user/reset-password/${_id}`,
//         password
//       );
//       dispatch(asynccurrentuser());
//     } catch (error) {
//       dispatch(iserror(error.response.data.message));
//     }
//   };

// export const asyncforgetpassworduser =
//   (email) => async (dispatch, getstate) => {
//     try {
//       const { data } = await axios.post(`/user/send-mail`, email);
//       console.log(email);
//       dispatch(asynccurrentuser());
//     } catch (error) {
//       //  dispatch(iserror(error.response.data.message))
//     }
//   };

// export const asyncotppassworduser = (pwd) => async (dispatch, getstate) => {
//   try {
//     const { data } = await axios.post(`/user/forget-link`, pwd);
//     dispatch(asynccurrentuser());
//   } catch (error) {
//     dispatch(iserror(error.response.data.message));
//   }
// };
