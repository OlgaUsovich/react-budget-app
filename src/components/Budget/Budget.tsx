import { useContext, useState } from "react";
import { BudgetContext, CurrencyContext, IBudgetContext, ICurrencyContext } from "../../context";
import { Button, StyledBudget, StyledInput, StyledSpan } from "./styles";
import { useInput } from "../../hooks";

export const Budget = () => {
  const { budget, setBudget } = useContext<IBudgetContext>(BudgetContext);
  const { currency } = useContext<ICurrencyContext>(CurrencyContext);
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
