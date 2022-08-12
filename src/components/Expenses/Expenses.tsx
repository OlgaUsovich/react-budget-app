import { ExpensesList, Input, Title } from "../../components"
import { StyledExpenses } from "./styles";

interface IProps {
    title: string;
  }  

export const Expenses = ({ title }: IProps) => {
  return (
    <StyledExpenses>
      <Title text={title} />
      <Input placeholder="search ..." type="text" />
      <ExpensesList />
    </StyledExpenses>
  );
};