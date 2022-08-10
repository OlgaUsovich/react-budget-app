import { ExpensesList } from "../ExpensesList/ExpensesList";
import { Input } from "../Input/Input";
import { Title } from "../Title/Title";
import { StyledExpenses } from "./styles";

interface IProps {
    title: string;
  }  

export const Expenses = ({ title }: IProps) => {
  return (
    <StyledExpenses>
      <Title text={title} />
      <Input placeholder="search ..." />
      <ExpensesList />
    </StyledExpenses>
  );
};