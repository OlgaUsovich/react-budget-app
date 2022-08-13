import { useContext, useState } from "react";
import { BudgetContext } from "../../context";
import { IBudgetContext } from "../../types";
import { Button, StyledBudget, StyledInput, StyledSpan } from "./styles";
import { useInput } from "../../hooks";

interface IProps {
  currency: string;
  budget: number;
}

export const Budget = ({ currency, budget }: IProps) => {
  const { setBudget } = useContext<IBudgetContext>(BudgetContext);
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const [inputOptions, clearInput] = useInput("");


  const handleEdit = () => {
    setIsEditMode(true);
  };

  const handleSave = () => {
    setIsEditMode(false);
    const currentBudget = Number(inputOptions.value);
    setBudget(currentBudget);
    clearInput();

  };

  return (
    <StyledBudget>
      {isEditMode ? (
        <>
          <StyledInput placeholder="Enter  budget ..." {...inputOptions}/>
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
