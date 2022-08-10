import { StytedInput } from "./styles";

interface IProps {
  placeholder: string;
}

export const Input = ({ placeholder }: IProps) => {
  return <StytedInput placeholder={placeholder} />;
};
