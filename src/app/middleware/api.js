import axios from 'axios';
import * as actions from '../api';

const { apiCallBegan, apiCallSuccess, apiCallFailed } = actions;

const api =
  ({ dispatch }) =>
  (next) =>
  async (action) => {
    if (action.type !== apiCallBegan.type) return next(action);

    const {
      url,
      method,
      data,
      onSuccess,
      onError,
      onStart,
      itemsPerPage,
      page,
    } = action.payload;

    console.log(action.payload, 'payload');

    if (onStart) dispatch({ type: onStart });

    next(action);

    try {
      const response = await axios.request({
        baseURL: 'http://nyx.vima.ekt.gr:3000/api',
        url,
        method,
        data,
        params: {
          itemsPerPage,
          page,
        },
      });

      dispatch(apiCallSuccess(response.data));

      if (onSuccess)
        dispatch({
          type: onSuccess,
          payload: response.data,
        });
    } catch (error) {
      console.log(error, 'error');

      dispatch(apiCallFailed(error.message));

      if (onError)
        dispatch({
          type: onError,
          payload: error.message,
        });
    }
  };

export default api;
