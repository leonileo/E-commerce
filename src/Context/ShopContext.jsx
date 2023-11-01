/* eslint-disable no-unused-vars */
import React, { createContext } from 'react'
import all_product from '../Components/Assets/all_product'

export const ShopContext = createContext(null)
 
const shopContextProvider = (props) => {
    const contextValue = {all_product}
    
    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default shopContextProvider;