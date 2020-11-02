import axios from "axios";
import {
  GET_VID_INFO_START,
  GET_VID_INFO_FAILED,
  GET_VID_INFO_DONE,
} from "../Common/Download_Common.js";
export const getVidInfo = (url) => async (dispatch) => {
  try {
    dispatch({
      type: GET_VID_INFO_START,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const payload = {
      url: url,
    };

    const data = await axios.post("/api/downloader/", payload, config);
    var infoArr = Array.from(new Set(data.data["format"]));
    infoArr = infoArr.filter((x) => {
      return x.qualityLabel !== null;
    });
    dispatch({
      type: GET_VID_INFO_DONE,
      payload: infoArr,
    });
  } catch (error) {
    dispatch({
      type: GET_VID_INFO_FAILED,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
