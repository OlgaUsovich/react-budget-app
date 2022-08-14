import { createContext, FC, ReactNode, useState } from "react";

export interface IBudgetContext {
    budget: number;
    setBudget: (budget: number) => void;
  }

export const BudgetContext = createContext<IBudgetContext>({
    budget: 0,
    setBudget: (value: number) => {}
});

const useBudgetContext = () => {
    const [budgetContext, setBudgetContext] = useState<IBudgetContext>(
        () => {
            return {
                budget: 0,
                setBudget: (value: number) => {
                    setBudgetContext(context => ({
                        ...context,
                        budget: value
                    }))
                }
            }
        }
    );
    return budgetContext;
}


export const BudgetProvider: FC<{children: ReactNode}> = ({children}) => {
    return <BudgetContext.Provider value={useBudgetContext()}>{children}</BudgetContext.Provider>
}