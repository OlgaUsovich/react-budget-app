import { useContext } from "react";
import { Budget, CustomSelect, Expenses, Form, Remaining, Spent, Title } from "./components";

import { BudgetContext, CurrencyContext, ExpensesContext } from "./context";
import { ICurrencyContext } from "./context/CurrencyContext/CurrencyContext";
import { IBudgetContext, IExpensesContext } from "./types";
import { StyledHeader, TitleWrapper, Wrapper } from "./ui/base";

const App = () => {
  const { currency } = useContext<ICurrencyContext>(CurrencyContext);
  const { expenses } = useContext<IExpensesContext>(ExpensesContext);
  const { budget } = useContext<IBudgetContext>(BudgetContext);

  const spent: number = expenses.reduce((acc, expense) => acc + expense.cost, 0)

  return (
    <Wrapper>
      <StyledHeader>
        <TitleWrapper>
          <Title text="Budget App" />
          <CustomSelect />
        </TitleWrapper>
        <Budget currency={currency} budget={budget} />
        <Remaining text={`Remaining: ${currency}2000`} />
        <Spent currency={currency} spent={spent} />
      </StyledHeader>
      <Expenses title="Expenses" />
      <Form />
    </Wrapper>
  );
};

export default App;
