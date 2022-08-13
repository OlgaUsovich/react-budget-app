import { StyledRemaining, StyledSpan } from "./styles";

interface IProps {
  currency: string;
  remaining: number;
}

export const Remaining = ({ currency, remaining }: IProps) => {
  return (
    <StyledRemaining remaining={remaining}>
      <StyledSpan>
        {remaining > 0 ? "Remaining:" : "Overspending by"} {currency}
        {remaining.toString().replace("-", "")}
      </StyledSpan>
    </StyledRemaining>
  );
};
