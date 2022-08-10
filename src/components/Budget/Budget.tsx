import { Button, StyledBudget, StyledSpan } from "./styles";

interface IProps {
  text: string;
}

export const Budget = ({ text }: IProps) => {
  return (
    <StyledBudget>
      <StyledSpan>{text}</StyledSpan>
      <Button>Edit</Button>
    </StyledBudget>
  );
};
