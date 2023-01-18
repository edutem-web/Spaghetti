import {createContext, useState} from "react";

const LogContext = createContext(null);

export const LogContextProvider = ({children}) => {
  const [log, setLog] = useState("로그가 표시될 곳입니다.");
  return (
    <LogContext.Provider value={{log, setLog}}>{children}</LogContext.Provider>
  );
};

export default LogContext;
