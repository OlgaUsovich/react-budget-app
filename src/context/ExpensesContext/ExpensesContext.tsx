import { createContext, FC, ReactNode, useState } from "react";
import { IExpense } from "../../types";

export interface IExpensesContext {
  expenses: IExpense[];
  setExpenses: (expense: IExpense) => void;
  deleteExpense: (expense: IExpense) => void;
}

export const ExpensesContext = createContext<IExpensesContext>({
  expenses: [],
  setExpenses: (value: IExpense) => {},
  deleteExpense: (value: IExpense) => {},
});

export const useExpensesValue = () => {
  const [expensesContext, setExpensesContext] = useState<IExpensesContext>(() => {
    return {
      expenses: [],
      setExpenses: (value: IExpense) => {
        setExpensesContext((context) => ({
          ...context,
          expenses: [...context.expenses, value],
        }));
      },
      deleteExpense: (value: IExpense) => {
        setExpensesContext((context) => {
          return {
            ...context,
            expenses: context.expenses.filter((expence) => expence.id !== value.id),
          };
        });
      },
    };
  });
  return expensesContext;
};

export const ExpensesProvider: FC<{ children: ReactNode }> = ({ children }) => {
  return <ExpensesContext.Provider value={useExpensesValue()}>{children}</ExpensesContext.Provider>;
};
