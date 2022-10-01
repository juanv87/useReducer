export const INITIAL_STATE = {
  post: {},
  loading: false,
  error: false,
};

export const postReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true, error: false };
    case "FETCH_POST_SUCCESS":
      return { ...state, loading: false, post: action.payload };
    case "FETCH_POST_ERROR":
      return { ...state, loading: false, error: true };
    default:
      return state;
  }
};
