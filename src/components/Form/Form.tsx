import React from "react";

import Input from "../Input/Input";

import * as F from "./styles";

const Form = () => {
  return (
    <F.FormWrapper>
      <Input name="add-new-todo" placeholder="Create a new todo" />
    </F.FormWrapper>
  );
};

export default Form;
