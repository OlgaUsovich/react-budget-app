import { ChangeEventHandler, useState } from "react";

interface IInputOptions {
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement>;
  }

export const useInput = (initialValue: string): IInputOptions => {
  const [value, setValue] = useState<string>(initialValue);

  const onChange: ChangeEventHandler<HTMLInputElement> = ({
    target,
  }) => {
    setValue(target.value);
  };

  return { value, onChange };
};