import React, { InputHTMLAttributes } from "react";
import { Input, InputWrapper, Label } from "../design";

type InputType = InputHTMLAttributes<HTMLInputElement> & { label: string };

const InputComponent: React.FC<InputType> = (props) => {
  const { className, label, ...rest } = props;
  return (
    <InputWrapper className={className}>
      <Label>{label}</Label>
      <Input {...rest} />
    </InputWrapper>
  );
};

export default InputComponent;
