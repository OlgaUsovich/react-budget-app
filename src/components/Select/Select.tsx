import { ICurrencyOption } from "../../types/types";
import Select from "react-select";
import { customStyles } from "./styles";
import { useState } from "react";


export const CustomSelect = () => {
  const [currency, setCurrency] = useState<ICurrencyOption>({value: "USD", label: "$"});

  const handleSelect = (option: ICurrencyOption | null): void => {
    if (option){
        setCurrency(option);
    }
  };


  const options: ICurrencyOption[] = [
    {value: "USD", label: "$"},
    {value: "EUR", label: "€"},
    {value: "GBR", label: "£"},
  ];

  return <Select onChange={handleSelect} value={currency} options={options} styles={customStyles} isSearchable={false} isMulti={false} />;
};