import { Budget } from "./components/Budget/Budget";
import { Button } from "./components/Button/Button";
import { Expenses } from "./components/Expenses/Expenses";
import { Input } from "./components/Input/Input";
import { Remaining } from "./components/Remaining/Remaining";
import { CustomSelect } from "./components/Select/Select";
import { Spent } from "./components/Spent/Spent";
import { Title } from "./components/Title/Title";
import { StyledForm, StyledHeader, TitleWrapper, Wrapper } from "./ui/base";

const App = () => {
  return (
    <Wrapper>
      <StyledHeader>
        <TitleWrapper>
          <Title text="Budget App" />
          <CustomSelect />
        </TitleWrapper>
        <Budget text="Budget: $3000" />
        <Remaining text="Remaining: $2000" />
        <Spent text="Spent so far: $1000" />
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
