import axios from "axios";

export const getWineList = () => (dispatch) => {
  let { currentPage } = params;
  axios
    .get(
      `https://zax5j10412.execute-api.ap-southeast-1.amazonaws.com/dev/api/product/list?page=${currentPage}`
    )
    .then((response) => {
      dispatch({
        type: "GET_WINELIST",
        payload: response.data,
      });
    })
    .catch((err) => console.log(err));
};
