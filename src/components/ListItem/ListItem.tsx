import { StyledListItem, Name, StyledDiv, StyledButton } from "./styles";
import { ReactComponent as Close } from "../../assets/icons/close.svg";
import { Badge } from "../Badge/Badge";
import { IExpense } from "../../types";
import { useContext } from "react";
import { ExpensesContext } from "../../context";

interface IProps {
  expense: IExpense;
}

export const ListItem = ({ expense }: IProps) => {
  const { deleteExpense } = useContext(ExpensesContext);
  
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
