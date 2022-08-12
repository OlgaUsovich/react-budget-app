import { createContext, FC, ReactNode, useState } from "react";

interface IExpense {
    id: number;
    body: string;
    cost: number;
}

interface IExpensesContext {
    expenses: IExpense[];
    setExpenses: (expense: IExpense) => void;
}

export const ExpensesContext = createContext<IExpensesContext>({
    expenses: [],
    setExpenses: (value: IExpense) => {}
});

const useExpensesValue = () => {
    const [expensesContext, setExpensesContext] = useState<IExpensesContext>(
        () => {
            return {
                expenses: [{
                    id: 3,
                    body: "chocolate",
                    cost: 10,
                }],
                setExpenses: (value: IExpense) => {
                    setExpensesContext(context => ({
                        ...context,
                        expenses: [...context.expenses, value]
                    }))
                }
            }
        }
    );
    return expensesContext;
}


export const ExpensesProvider: FC<{children: ReactNode}> = ({children}) => {
    return <ExpensesContext.Provider value={useExpensesValue()}>{children}</ExpensesContext.Provider>
}