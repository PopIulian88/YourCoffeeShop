import {createContext} from "react";


export const MyContext = createContext({
    stocksData: [],
    setStocksData: () => {},
})