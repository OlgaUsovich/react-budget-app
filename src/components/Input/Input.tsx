import { ChangeEventHandler } from "react";
import { StytedInput } from "./styles";

interface IProps {
  placeholder: string;
  type: string;
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export const Input = ({ placeholder, type, onChange, value }: IProps) => {
  return <StytedInput placeholder={placeholder} type={type} value={value} onChange={onChange} />;
};
