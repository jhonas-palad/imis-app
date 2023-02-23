import React from 'react';

const ServiceOrderContext = React.createContext({});

export const ServiceOrderProvider = ({children}) => {
    const [ serviceOrderDetails, setServiceOrderDetails ] = React.useState({});
    return (
        <ServiceOrderContext.Provider value={{serviceOrderDetails, setServiceOrderDetails}} >
            {children}
        </ServiceOrderContext.Provider>
    )
}

export const useServiceOrder = () => {
    return React.useContext(ServiceOrderContext);
}