import { useEffect } from "react";
import { ExpensesList, Input, Title } from "../../components";
import { useDebounce, useInput, useSearch } from "../../hooks";
import { StyledExpenses } from "./styles";

interface IProps {
  title: string;
}

export const Expenses = ({ title }: IProps) => {
  const search = useInput("");
  const debounceValue = useDebounce(search.value, 500);
  const {expensesToRender,  searchExpenses} = useSearch();

  useEffect(() => {
    searchExpenses(debounceValue)
  }, [debounceValue, searchExpenses]);

  return (
    <StyledExpenses>
      <Title text={title} />
      <Input placeholder="search ..." type="text" {...search} />
      <ExpensesList expensesToRender={expensesToRender} />
    </StyledExpenses>
  );
};
