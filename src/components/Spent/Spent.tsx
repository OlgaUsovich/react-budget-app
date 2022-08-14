import { useContext } from "react";
import { CurrencyContext, ExpensesContext, ICurrencyContext, IExpensesContext } from "../../context";
import { StyledSpent, StyledSpan } from "./styles";

export const Spent = () => {
  const { currency } = useContext<ICurrencyContext>(CurrencyContext);
  const { expenses } = useContext<IExpensesContext>(ExpensesContext);

  const spent: number = expenses.reduce((acc, expense) => acc + expense.cost, 0)

  return (
    <StyledSpent>
      <StyledSpan>Spent so far: {currency}{spent}</StyledSpan>
    </StyledSpent>
  );
};
