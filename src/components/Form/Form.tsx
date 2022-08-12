import { StyledForm, StytedInput } from "./styles";
import { useForm, SubmitHandler } from "react-hook-form";
import { FormType } from "../../types";
import { Button, Input, Title } from "../../components";
import { useContext } from "react";
import { ExpensesContext } from "../../context";
import { v4 as uuidv4 } from "uuid";

// const Controller = ({ register, name, rules, render }: any) => {
//   const props = register(name, rules);

//   return render({
//     onchange: (e: any) =>
//       props.onChange({
//         target: { name, value: e.target.value },
//       }),
//     name: props.name,
//     onBlur: props.onBlur,
//   });
// };

export const Form = () => {
  const { setExpenses } = useContext(ExpensesContext);
  const {
    register,
    handleSubmit,
    reset,
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
        {...{
          register,
          name: "body",
          placeholder: "enter name ...",
          type: "text",
          rules: {
            required: "Please enter the name",
            maxLength: { value: 15, message: "Max lenth is 15" },
          },
          render: (props: any) => <Input {...props} placeholder="enter name ..." type="text" />,
        }}
      /> */}

      <StytedInput
        placeholder="enter name ..."
        type="text"
        {...register("body", {
          required: "Please enter the name",
          maxLength: { value: 15, message: "Max lenth is 15" },
        })}
      />
      {errors.body && <span>{errors.body.message}</span>}
      <StytedInput
        placeholder="enter cost ..."
        type="number"
        {...register("cost", {
          required: "Please enter the cost",
          maxLength: { value: 5, message: "Max lenth is 5" },
          valueAsNumber: true,
        })}
      />
      {errors.cost && <span>{errors.cost.message}</span>}
      <Button />
    </StyledForm>
  );
};
