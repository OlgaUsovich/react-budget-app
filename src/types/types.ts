import { Currency } from "../config";

export interface ICurrencyOption {
    readonly value: Currency;
    readonly label: keyof typeof Currency;
  }

  export interface IExpense {
    id: string;
    body: string;
    cost: number;
  }
