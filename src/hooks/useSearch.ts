import { useCallback, useContext, useEffect, useState } from "react";
import { ExpensesContext } from "../context";
import { IExpense, IExpensesContext } from "../types";

export const useSearch = () => {
  const { expenses } = useContext<IExpensesContext>(ExpensesContext);
  const [expensesToRender, setExpensesToRender] = useState<IExpense[]>(expenses);
  const searchExpenses = useCallback(
    (searchPattern: string): void => {
        setExpensesToRender(() => {
        return expenses.filter(
          (expense) =>
            expense.body.toLowerCase().includes(searchPattern.toLowerCase())
        );
      });
    },
    [expenses]
  );

  useEffect(() => {
    setExpensesToRender(expenses);
  }, [expenses]);

  return {
    expensesToRender,
    searchExpenses,
  };
};