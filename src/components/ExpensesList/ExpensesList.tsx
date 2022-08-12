import { useContext } from "react";
import { ExpensesContext } from "../../context";
import { ListItem } from "../ListItem/ListItem";
import { EmptyText, StyledList } from "./styles";


export const ExpensesList = () => {
  const { expenses, deleteExpense } = useContext(ExpensesContext);
  return (
    expenses.length > 0 ? <StyledList>
        {expenses.map((expense) => {
          return <ListItem deleteExpense={deleteExpense} key={expense.id} expense={expense}/>;
        })}
      </StyledList> : <EmptyText>Oooops 🙈</EmptyText>
  );
};