import { CustomSelect } from "./components/Select/Select";
import { Title } from "./components/Title/Title";
import { TitleWrapper, Wrapper } from "./ui/base";

const App = () => {
  return (
    <Wrapper>
      <header>
        <TitleWrapper>
          <Title text="Budget App" />
          <CustomSelect />
        </TitleWrapper>
      </header>
    </Wrapper>
  );
};

export default App;
