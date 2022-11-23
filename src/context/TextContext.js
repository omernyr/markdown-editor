import { createContext, useContext, useState } from "react";

const TextContext = createContext();

export const TextProvider = ({children}) => {

    const [text, setText] = useState('');

    const values = {
        text,
        setText
    }

    return <TextContext.Provider value={values}>{children}</TextContext.Provider>
}

export const useText = () => useContext(TextContext);
