import { StyledListItem, Name, StyledDiv, StyledButton } from "./styles";
import { ReactComponent as Close } from "../../assetes/icons/close.svg";
import { Badge } from "../Badge/Badge";
import { IExpense } from "../../types";

interface IProps {
  expense: IExpense;
  deleteExpense: (expense: IExpense) => void;
}

export const ListItem = ({ expense, deleteExpense }: IProps) => {
  return (
    <StyledListItem id={expense.id}>
      <Name>{expense.body}</Name>
      <StyledDiv>
        <Badge cost={expense.cost} />
        <StyledButton onClick={() => deleteExpense(expense)}>
          <Close />
        </StyledButton>
      </StyledDiv>
    </StyledListItem>
  );
};
