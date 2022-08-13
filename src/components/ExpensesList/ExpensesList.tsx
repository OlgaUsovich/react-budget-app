import { useContext } from "react";
import { ExpensesContext } from "../../context";
import { IExpense } from "../../types";
import { ListItem } from "../ListItem/ListItem";
import { EmptyText, StyledList } from "./styles";

interface IProps {
  expensesToRender: IExpense[];
}


export const ExpensesList = ({expensesToRender}: IProps) => {
  const { deleteExpense } = useContext(ExpensesContext);
  return (
    expensesToRender.length > 0 ? <StyledList>
        {expensesToRender.map((expense) => {
          return <ListItem deleteExpense={deleteExpense} key={expense.id} expense={expense}/>;
        })}
      </StyledList> : <EmptyText>Oooops 🙈</EmptyText>
  );
};