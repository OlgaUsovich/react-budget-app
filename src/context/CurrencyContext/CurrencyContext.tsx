import { createContext, FC, ReactNode, useState } from "react";
import { Currency } from "../../config";

interface ICurrencyContext {
    currency: string;
    setCurrency: (value: Currency) => void;
}

export const CurrencyContext = createContext<ICurrencyContext>({
    currency: Currency.USD,
    setCurrency: (value: Currency) => {}
});

const useCurrencyValue = () => {
    const [currencyValue, setCurrencyValue] = useState<ICurrencyContext>(
        () => {
            return {
                currency: Currency.USD,
                setCurrency: (value: Currency) => {
                    setCurrencyValue(context => ({
                        ...context,
                        currency: value
                    }))
                }
            }
        }
    );
    return currencyValue;
}


export const CurrencyProvider: FC<{children: ReactNode}> = ({children}) => {
    return <CurrencyContext.Provider value={useCurrencyValue()}>{children}</CurrencyContext.Provider>
}