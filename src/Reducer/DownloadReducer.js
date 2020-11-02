import {
  GET_VID_INFO_START,
  GET_VID_INFO_FAILED,
  GET_VID_INFO_DONE,
} from "../Common/Download_Common.js";

export const getVidInfoReducer = (
  state = { info: [], loading: false },
  action
) => {
  switch (action.type) {
    case GET_VID_INFO_START:
      return {
        ...state,
        loading: true,
      };
    case GET_VID_INFO_DONE:
      return {
        info: action.payload,
        loading: false,
      };
    case GET_VID_INFO_FAILED:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};
