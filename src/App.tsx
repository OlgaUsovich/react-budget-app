import { useContext } from "react";
import { Budget } from "./components/Budget/Budget";
import { Button } from "./components/Button/Button";
import { Expenses } from "./components/Expenses/Expenses";
import { Input } from "./components/Input/Input";
import { Remaining } from "./components/Remaining/Remaining";
import { CustomSelect } from "./components/Select/Select";
import { Spent } from "./components/Spent/Spent";
import { Title } from "./components/Title/Title";
import { CurrencyContext } from "./context";
import { StyledForm, StyledHeader, TitleWrapper, Wrapper } from "./ui/base";

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
      <StyledForm>
        <Title text="Add Expense" />
        <Input placeholder="enter name ..." />
        <Input placeholder="enter cost ..." />
        <Button />
      </StyledForm>
    </Wrapper>
  );
};

export default App;
