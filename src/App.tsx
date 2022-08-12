import { useContext } from "react";
import { Budget, CustomSelect, Expenses, Form, Remaining, Spent, Title } from "./components";

import { CurrencyContext } from "./context";
import { StyledHeader, TitleWrapper, Wrapper } from "./ui/base";

const App = () => {
  const { currency } = useContext(CurrencyContext);

  return (
    <Wrapper>
      <StyledHeader>
        <TitleWrapper>
          <Title text="Budget App" />
          <CustomSelect />
        </TitleWrapper>
        <Budget text={`Budget: ${currency}3000`} />
        <Remaining text={`Remaining: ${currency}2000`} />
        <Spent text={`Spent so far: ${currency}1000`} />
      </StyledHeader>
      <Expenses title="Expenses" />
      {/* <Form /> */}
    </Wrapper>
  );
};

export default App;
