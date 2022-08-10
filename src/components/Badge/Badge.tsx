import { useContext } from "react";
import { CurrencyContext } from "../../context";
import { StyledSpan } from "./styles";

interface IProps {
  cost: number;
}

export const Badge = ({ cost }: IProps) => {
  const { currency } = useContext(CurrencyContext);
  return (
    <StyledSpan>{currency}{cost}</StyledSpan>
  );
};
