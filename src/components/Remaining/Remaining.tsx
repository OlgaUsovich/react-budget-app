import { useContext } from "react";
import { BudgetContext, CurrencyContext, ExpensesContext, IBudgetContext, ICurrencyContext, IExpensesContext } from "../../context";
import { StyledRemaining, StyledSpan } from "./styles";


export const Remaining = () => {
  const { budget } = useContext<IBudgetContext>(BudgetContext);
  const { currency } = useContext<ICurrencyContext>(CurrencyContext);
  const { expenses } = useContext<IExpensesContext>(ExpensesContext);

  const remaining: number = expenses.reduce((acc, expense) => acc - expense.cost, budget)

  return (
    <StyledRemaining remaining={remaining}>
      <StyledSpan>
        {remaining >= 0 ? "Remaining:" : "Overspending by"} {currency}
        {remaining.toString().replace("-", "")}
      </StyledSpan>
    </StyledRemaining>
  );
};
