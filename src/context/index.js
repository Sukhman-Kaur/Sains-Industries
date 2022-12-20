import React, {createContext, useState} from 'react'
import useFetch from '../hooks/useFetch'

const StoreContext = createContext(null)

const StoreProvider = ({children}) => {

    // Store Grid
    const [viewGrid, setViewGrid] = useState(true)

    const {response: products, error } = useFetch('https://course-api.com/react-store-products')

    if(error) return 'error....';

    return (
        <StoreContext.Provider value={{
            viewGrid, setViewGrid,
            products, error
        }}>
            {products ? children : ''}
        </StoreContext.Provider>
    );
}

export { StoreProvider, StoreContext }