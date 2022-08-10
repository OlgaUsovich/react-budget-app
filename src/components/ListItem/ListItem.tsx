import { StyledListItem, Name, StyledDiv, StyledButton } from "./styles";
import { ReactComponent as Close } from "../../assetes/icons/close.svg";
import { Badge } from "../Badge/Badge";

interface IProps {
  name: string;
  currency: string;
  cost: number;
}

export const ListItem = ({ name, cost, currency }: IProps) => {
  return (
    <StyledListItem>
      <Name>{name}</Name>
      <StyledDiv>
        <Badge currency={currency} cost={cost} />
        <StyledButton>
          <Close />
        </StyledButton>
      </StyledDiv>
    </StyledListItem>
  );
};
