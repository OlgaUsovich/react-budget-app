import { StyledSpent, StyledSpan } from "./styles";

interface IProps {
  text: string;
}

export const Spent = ({ text }: IProps) => {
  return (
    <StyledSpent>
      <StyledSpan>{text}</StyledSpan>
    </StyledSpent>
  );
};
