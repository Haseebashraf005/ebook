import { createContext, useContext, useReducer } from "react"
import { filterReducer } from "../reducers"

const filterInitialState = {
    productList: [],
    onlyInstock: false,
    bestSellerOnly: false,
    sortBy: null,
    ratings: null,
}



export const FilterContext = createContext(filterInitialState)


// note if we dont provide the context provider to our app then it will 
// take the deafault value of coontext other wise we need to pass the 
// value

export const FilterProvider = ({ children }) => {

    const [state, dispatch] = useReducer(filterReducer, filterInitialState)

    function initializeProductList(products){
        
        dispatch({
            type:"PRODUCT_LIST",
            payload:{
                products:products
            }
        } )
        
    }

    const value = {
        
        productList:state.productList,
        initializeProductList
    }
    return (
        <FilterContext.Provider value={value}>
            {children}
        </FilterContext.Provider>
    )
}

export const useFilter = () => useContext(FilterContext)