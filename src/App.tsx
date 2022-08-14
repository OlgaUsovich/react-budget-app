import { Budget, CustomSelect, Expenses, Form, Remaining, Spent, Title } from "./components";
import { StyledHeader, TitleWrapper, Wrapper } from "./ui/base";

const App = () => {

  return (
    <Wrapper>
      <StyledHeader>
        <TitleWrapper>
          <Title text="Budget App" />
          <CustomSelect />
        </TitleWrapper>
        <Budget />
        <Remaining />
        <Spent />
      </StyledHeader>
      <Expenses />
      <Form />
    </Wrapper>
  );
};

export default App;
