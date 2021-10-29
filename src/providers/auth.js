import React, { useEffect, useState } from "react";

export const AuthContext = React.createContext({});

export const AuthProvider = (props) => {

    const [cep, setCep] = useState({
        numberCep: ""
    });

    useEffect(() => {
        const cepStorage = localStorage.getItem("cep");
        if (cepStorage) {
            setCep(JSON.parse(cepStorage));
        } else {
            setCep({
                numberCep: "",
            });
        }
    }, []);

    return (
        <AuthContext.Provider value={{ cep, setCep }}>
            {props.children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => React.useContext(AuthContext);