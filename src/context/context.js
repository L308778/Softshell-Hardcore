import React, {
    createContext,
    useContext,
    useEffect,
    useState,
    useRef,
  } from "react";

  export const DataContext = createContext({});

  const DataContextProvider = ({ children }) => {

    const [paint, setPaint] = useState(null)
    const [tattoo, setTattoo] = useState(null)
    const [dandd, setDandd] = useState(null)

  
    return (
      <DataContext.Provider
        value={{
          paint,
          tattoo,
          dandd,
          setPaint,
          setTattoo,
          setDandd
        }}
      >
        {children}
      </DataContext.Provider>
    );
  };
  
  export default DataContextProvider;