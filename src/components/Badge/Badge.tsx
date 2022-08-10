import { StyledSpan } from "./styles";

interface IProps {
  currency: string;
  cost: number;
}

export const Badge = ({ currency, cost }: IProps) => {
  return (
    <StyledSpan>{currency}{cost}</StyledSpan>
  );
};
