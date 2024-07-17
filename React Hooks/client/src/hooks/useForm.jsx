import { useState } from "react";

const useForm = (initValue, onSubmitHandler) => {
  const [formValue, setFormValue] = useState(initValue);

  const onChangeHandler = (e) => {
    setFormValue((state) => ({ ...state, [e.target.name]: e.target.value }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (onSubmitHandler) {
      onSubmitHandler(formValue);
    }
  };

  return{
    formValue,
    onChangeHandler,
    onSubmit
  }
};
export default useForm;
