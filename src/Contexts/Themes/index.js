import React, {createContext, useState} from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
    const [isLightTheme, setIsLightTheme] = useState(true);
    const light = {
        primary : '',
        primaryVariant : '',
        secondary : '',
        surface : '', 
        bg : '',
        error : ''
    };
    const dark  = {
        primary : '',
        primaryVariant : '',
        secondary : '',
        surface : '', 
        bg : '',
        error : ''
    };
    let theme = isLightTheme ? light :  dark;

    toggleTheme = () => {
       setIsLightTheme(!isLightTheme);
       theme = isLightTheme ? light :  dark;
    }

    return(
        <ThemeContext.Provider value={{isLightTheme: isLightTheme, theme: theme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider;