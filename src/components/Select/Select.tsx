import { ICurrencyOption } from "../../types/types";
import Select from "react-select";
import { useContext, useState } from "react";
import { Currency } from "../../config/currency";
import { CurrencyContext } from "../../context";

export const CustomSelect = () => {
  const { setCurrency } = useContext(CurrencyContext);
  const [currencyOption, setCurrencyOption] = useState<ICurrencyOption>({ value: Currency.USD, label: "USD" });

  const handleSelect = (option: ICurrencyOption | null): void => {
    if (option) {
      setCurrencyOption(option);
      setCurrency(option.value);
    }
  };

  const options: ICurrencyOption[] = [
    { value: Currency.USD, label: "USD" },
    { value: Currency.EUR, label: "EUR" },
    { value: Currency.GBR, label: "GBR" },
  ];

  return (
    <Select onChange={handleSelect} value={currencyOption} options={options} isSearchable={false} isMulti={false} />
  );
};
