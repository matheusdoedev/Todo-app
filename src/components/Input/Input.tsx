import React, { InputHTMLAttributes } from "react";

import * as I from "./styles";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  value?: string;
  setValue?: any;
}

const Input: React.FC<InputProps> = ({
  name,
  label,
  value,
  setValue,
  ...props
}) => {
  return (
    <I.InputBlock>
      <label>{label}</label>
      <input
        type="text"
        id={name}
        name={name}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        {...props}
      />
    </I.InputBlock>
  );
};

export default Input;
