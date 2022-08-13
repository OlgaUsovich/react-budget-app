import { StyledSpent, StyledSpan } from "./styles";

interface IProps {
  currency: string;
  spent: number;
}

export const Spent = ({currency, spent}: IProps) => {
  return (
    <StyledSpent>
      <StyledSpan>Spent so far: {currency}{spent}</StyledSpan>
    </StyledSpent>
  );
};
