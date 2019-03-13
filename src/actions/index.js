import axios from "axios";

export const fetchAuthors = () => async dispatch => {
  const response = await axios.get(
    "http://www.mocky.io/v2/5c52700c3200003003855abf"
  );

  dispatch({ type: "FETCH_AUTHORS", payload: response.data.authors });
};

export const addAuthor = form => {
  return {
    type: "ADD_AUTHOR",
    payload: form
  };
};
