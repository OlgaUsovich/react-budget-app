import { Currency } from "../config/currency";

export interface ICurrencyOption {
    readonly value: Currency;
    readonly label: keyof typeof Currency;
  }