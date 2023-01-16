import {createContext, useState} from "react";

const TimerContext = createContext(null);

export const TimerContextProvider = ({children}) => {
    const [timer, setTimer] = useState();
    return (
        <TimerContext.Provider value={{timer, setTimer}}>
            {children}
        </TimerContext.Provider>
    );
};

export default TimerContext;
