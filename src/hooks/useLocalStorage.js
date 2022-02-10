import React, { useState, useEffect} from "react";

const useLocalStorage = (key, initialValue) => {
 
    const [value, setValue] = useState(() => {
        
        if(localStorage.getItem(key)){
            return(JSON.parse(localStorage.getItem(key)))
        } else{
            localStorage.setItem(key, JSON.stringify(initialValue));
            return (initialValue);
        }
    })

    const setStoredValue = (newValue) => {
        console.log('newValue: ', newValue)
        localStorage.setItem(key, JSON.stringify(newValue));
        setValue(newValue);
    }

    return[ value, setStoredValue ];
}
export default useLocalStorage;