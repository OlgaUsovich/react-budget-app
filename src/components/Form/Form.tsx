import { StyledForm } from "./styles";
import {useForm, SubmitHandler} from "react-hook-form";
import { FormType } from "../../types";
import { Button, Input, Title } from "../../components";

export const Form = () => {
    const { register, handleSubmit } = useForm<FormType>();

    const onSubmit: SubmitHandler<FormType> = data => {
      console.log(data)
    }

    return <StyledForm onSubmit={handleSubmit(onSubmit)}>
        <Title text="Add Expense" />
        <Input placeholder="enter name ..." type="text" {...register("body")}/>
        <Input placeholder="enter cost ..." type="number" {...register("cost")}/>
        <Button />
      </StyledForm>
};