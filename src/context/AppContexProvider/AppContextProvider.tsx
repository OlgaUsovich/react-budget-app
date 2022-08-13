import { FC, ReactNode } from "react";
import { BudgetProvider } from "../BudgetContext";
import { CurrencyProvider } from "../CurrencyContext";
import { ExpensesProvider } from "../ExpensesContext";

const providers = [BudgetProvider, ExpensesProvider, CurrencyProvider ]

export const AppContextProvider: FC<{children: ReactNode}> = ({ children }) => {
    return <>{providers.reduceRight((acc, Component) => {
        return <Component>{acc}</Component>
    }, children)}</>
}