import { ChangeEventHandler, useState } from "react";

interface IInputOptions {
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
  }

type UseInputHookOutput = [IInputOptions, () => void];

export const useInput = (initialValue: string): UseInputHookOutput => {
  const [inputValue, setInputValue] = useState<string>(initialValue);
  const handleInputChange: ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => {
    setInputValue(target.value);
  };
  const clearInput = () => {
    setInputValue("");
  };

  return [{ value: inputValue, onChange: handleInputChange }, clearInput];
};