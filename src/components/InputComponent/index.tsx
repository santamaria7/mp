import React, { InputHTMLAttributes } from "react";
import { Input, InputWrapper, Label } from "../design";

type InputType = InputHTMLAttributes<HTMLInputElement> & { label: string };

const InputComponent: React.FC<InputType> = (props) => {
  const { className, label, ...rest } = props;
  const id = `input-${parseInt((Math.random()* 10000).toString(), 16)}`;
  return (
    <InputWrapper className={className}>
      <Label htmlFor={id}>{label}</Label>
      <Input {...rest} id={id}/>
    </InputWrapper>
  );
};

export default InputComponent;
