import {createContext} from "react";


export const MyContext = createContext({
    stocksData: [],
    setStocksData: () => {},
    stockToEdit: {},
    setStockToEdit: () => {},
    productData: [],
    setProductData: () => {},
    productToEdit: {},
    setProductToEdit: () => {},
    profitData: [],
    setProfitData: () => {},
    tablesData: [],
    setTablesData: () => {},
    tableToEdit: {},
    setTableToEdit: () => {},

})