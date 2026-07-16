import { useContext, createContext, useState } from "react";

export const LoginContext = createContext();
export const useLoginContext = () => useContext(LoginContext);

export const ProviederLoginContext = ({children}) => {
    const [ tokenLogin, setTokenLogin ] = useState(null)

    return (
        <LoginContext.Provider value={ { tokenLogin, setTokenLogin } }>
            {children}
        </LoginContext.Provider>
    )
}