import { Currency } from "../config";

export interface ICurrencyOption {
    readonly value: Currency;
    readonly label: keyof typeof Currency;
  }

  export type FormType = {
    body: string;
    cost: number;
  }

  export interface IExpense {
    id: string;
    body: string;
    cost: number;
  }

  export interface IExpensesContext {
    expenses: IExpense[];
    setExpenses: (expense: IExpense) => void;
    deleteExpense: (expense: IExpense) => void;
  }