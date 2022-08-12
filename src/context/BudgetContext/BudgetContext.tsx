import { createContext, FC, ReactNode, useState } from "react";

interface IBudget {
    budget: number;
}

interface IBudgetContext {
    budget: IBudget;
    setBudget: (budget: IBudget) => void;
}

export const BudgetContext = createContext<IBudgetContext>({
    budget: {budget: 0},
    setBudget: (value: IBudget) => {}
});

const useBudgetContext = () => {
    const [budgetContext, setBudgetContext] = useState<IBudgetContext>(
        () => {
            return {
                budget: {
                    budget: 0
                },
                setBudget: (value: IBudget) => {
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