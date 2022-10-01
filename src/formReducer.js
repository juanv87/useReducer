export const INITIAL_STATE = {
  title: "dsds",
  desc: "",
  price: "",
  category: "",
  tags: [],
  images: {
    sm: "",
    md: "",
    lg: "",
  },
  quantity: 0,
};

export const formReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_INPUT":
      return { ...state, [action.payload.name]: action.payload.value };
    case "SET_TITLE":
      return { ...state, title: action.value };
    default:
      return state;
  }
};
