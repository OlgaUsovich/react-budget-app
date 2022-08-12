import { Currency } from "../config";

export interface ICurrencyOption {
    readonly value: Currency;
    readonly label: keyof typeof Currency;
  }

  export type FormType = {
    body: string;
    cost: number;
  }