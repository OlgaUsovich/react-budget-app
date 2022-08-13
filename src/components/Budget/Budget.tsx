import { useContext, useState } from "react";
import { BudgetContext } from "../../context";
import { IBudgetContext } from "../../types";
import { Button, StyledBudget, StyledInput, StyledSpan } from "./styles";

interface IProps {
  currency: string;
  budget: number;
}

export const Budget = ({ currency, budget }: IProps) => {
  const { setBudget } = useContext<IBudgetContext>(BudgetContext);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  const handleEdit = () => {
    setIsEditMode(true);
  };

  const handleSave = () => {
    setIsEditMode(false);
    setBudget(444);

  };

  return (
    <StyledBudget>
      {isEditMode ? (
        <>
          <StyledInput placeholder="Enter  budget ..." />
          <Button onClick={handleSave}>Save</Button>
        </>
      ) : (
        <>
          <StyledSpan>
            Budget: {currency}
            {budget}
          </StyledSpan>
          <Button onClick={handleEdit}>Edit</Button>
        </>
      )}
    </StyledBudget>
  );
};
