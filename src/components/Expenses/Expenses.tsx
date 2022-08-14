import { useEffect } from "react";
import { ExpensesList, Input, Title } from "../../components";
import { useDebounce, useInput, useSearch } from "../../hooks";
import { StyledExpenses } from "./styles";

export const Expenses = () => {
  const search = useInput("");
  const debounceValue = useDebounce(search.value, 500);
  const {expensesToRender,  searchExpenses} = useSearch();

  useEffect(() => {
    searchExpenses(debounceValue)
  }, [debounceValue, searchExpenses]);

  return (
    <StyledExpenses>
      <Title text="Expenses" />
      <Input placeholder="search ..." type="text" {...search} />
      <ExpensesList expensesToRender={expensesToRender} />
    </StyledExpenses>
  );
};
