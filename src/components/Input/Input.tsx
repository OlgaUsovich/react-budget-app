import { StytedInput } from "./styles";

interface IProps {
  placeholder: string;
  type: string;
}

export const Input = ({ placeholder, type }: IProps) => {
  return <StytedInput placeholder={placeholder} type={type} />;
};
