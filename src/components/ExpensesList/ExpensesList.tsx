import { ChangeEvent, useContext, useState } from "react";
import { ExpensesContext } from "../../context";
import { ListItem } from "../ListItem/ListItem";

export const ExpensesList = () => {
  const { expenses, setExpenses } = useContext(ExpensesContext);

  const [newExpense, setNewExpense] = useState("");

  const handleNewExpense = (event: ChangeEvent<HTMLInputElement>) => {
    setNewExpense(event.target.value);
    setExpenses({
        id: 9,
        body: event.target.value,
        cost: 1,
    })
  }

  return (
    <>
      <input type="text" value={newExpense} onChange={handleNewExpense} />
      <ListItem name={"shopping"} cost={100} currency={"$"} />
      <ul>
        {expenses.map((expense) => {
          return <li key={expense.id}>{expense.body}</li>;
        })}
      </ul>
    </>
  );
};
