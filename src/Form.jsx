import React, { useReducer } from "react";
import { formReducer, INITIAL_STATE } from "./formReducer";

const Form = () => {
  const [state, dispatch] = useReducer(formReducer, INITIAL_STATE);
  const handleChange = ({ target: { name, value } }) => {
    dispatch({
      type: "CHANGE_INPUT",
      name: name,
      value: value,
    });
  };
  console.log("🚀 ~ file: Form.jsx ~ line 64 ~ Form ~ state", state);
  return (
    <div>
      <h1>Form</h1>
      <form>
        <input onChange={handleChange} name="title" type="text" />
        <input onChange={handleChange} name="desc" type="text" />
        <input onChange={handleChange} name="category" type="text" />
      </form>
      {state.title} <br />
      {state.desc} <br />
      {state.category}
    </div>
  );
};

export default Form;
