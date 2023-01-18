import {createContext, useState} from "react";

const AudioPathContext = createContext(null);

export const AudioPathContextProvider = ({children}) => {
  const [audioPath, setAudioPath] = useState(null);
  return (
    <AudioPathContext.Provider value={{audioPath, setAudioPath}}>
      {children}
    </AudioPathContext.Provider>
  );
};

export default AudioPathContext;
