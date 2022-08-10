import { StyledListItem, Name, StyledDiv, StyledButton } from "./styles";
import { ReactComponent as Close } from "../../assetes/icons/close.svg";
import { Badge } from "../Badge/Badge";

interface IProps {
  name: string;
  cost: number;
}

export const ListItem = ({ name, cost }: IProps) => {
  return (
    <StyledListItem>
      <Name>{name}</Name>
      <StyledDiv>
        <Badge cost={cost} />
        <StyledButton>
          <Close />
        </StyledButton>
      </StyledDiv>
    </StyledListItem>
  );
};
