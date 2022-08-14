import { useContext, useState } from "react";
import { BudgetContext, IBudgetContext } from "../../context";
import { Button, StyledBudget, StyledInput, StyledSpan } from "./styles";
import { useInput } from "../../hooks";

interface IProps {
  currency: string;
  budget: number;
}

export const Budget = ({ currency, budget }: IProps) => {
  const { setBudget } = useContext<IBudgetContext>(BudgetContext);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const budgetInput = useInput("");


  const handleEdit = () => {
    setIsEditMode(true);
  };

  const handleSave = () => {
    setIsEditMode(false);
    const currentBudget = Number(budgetInput.value);
    setBudget(currentBudget);

  };

  return (
    <StyledBudget>
      {isEditMode ? (
        <>
          <StyledInput placeholder="Enter  budget ..." {...budgetInput}/>
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
