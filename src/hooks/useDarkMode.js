import useLocalStorage from "./useLocalStorage";
import React, { useState, useEffect} from "react";

const useDarkMode = () => {

    const [ value, setStoredValue ] = useLocalStorage('darkMode', null);
    const [ darkMode, setDarkMode ] = useState(value);

    useEffect(() => {
        setStoredValue(darkMode);
    }, [darkMode])
    return [darkMode, setDarkMode]
}
export default useDarkMode;