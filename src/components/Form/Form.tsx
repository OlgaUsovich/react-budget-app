import { StyledForm, StytedInput, Error} from "./styles";
import { useForm, SubmitHandler } from "react-hook-form";
import { Button, Title } from "../../components";
import { useContext } from "react";
import { ExpensesContext } from "../../context";
import { v4 as uuidv4 } from "uuid";

type FormType = {
  body: string;
  cost: number;
}

export const Form = () => {
  const { setExpenses } = useContext(ExpensesContext);
  const {
    register,
    handleSubmit,
    reset,
    // control,

    formState: { errors },
  } = useForm<FormType>();

  const onSubmit: SubmitHandler<FormType> = ({ body, cost }) => {
    setExpenses({
      id: uuidv4(),
      body,
      cost,
    });
    reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <Title text="Add Expense" />

      {/* <Controller
        name="body"
        control={control}
        rules={{  required: "Please enter the name", maxLength: { value: 15, message: "Max lenth is 15" } }}
        render={({ field }) => <Input placeholder="enter name ..." type="text" {...field} />}
      /> */}

      <StytedInput
        placeholder="enter name ..."
        type="text"
        {...register("body", {
          required: "Please enter the name",
          maxLength: { value: 15, message: "Max lenth is 15" },
        })}
      />
      {errors.body && <Error>{errors.body.message}</Error>}

      {/* <Controller
        name="cost"
        control={control}
        rules={{  required: "Please enter the cost", maxLength: { value: 5, message: "Max lenth is 5" } }}
        render={({ field }) => <Input placeholder="enter cost ..." type="number" {...field} />}
      /> */}

      <StytedInput
        placeholder="enter cost ..."
        type="number"
        {...register("cost", {
          required: "Please enter the cost",
          maxLength: { value: 5, message: "Max lenth is 5" },
          valueAsNumber: true,
        })}
      />
      {errors.cost && <Error>{errors.cost.message}</Error>}
      <Button />
    </StyledForm>
  );
};
