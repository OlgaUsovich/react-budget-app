import { StyledRemaining, StyledSpan } from "./styles";

interface IProps {
  text: string;
}

export const Remaining = ({ text }: IProps) => {
  return (
    <StyledRemaining>
      <StyledSpan>{text}</StyledSpan>
    </StyledRemaining>
  );
};
