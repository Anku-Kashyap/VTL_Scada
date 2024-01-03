import React, { createContext, useContext, useState, useEffect } from "react";

const MyContext = createContext();

const MyContextProvider = ({ children }) => {
  const [sharedValue, setSharedValue] = useState(false);

  const updateSharedValue = (newValue) => {
    setSharedValue(newValue);
  };

  useEffect(() => {
    const logoutTimer = setTimeout(() => {
      setSharedValue(false);
      console.log("Setted false");
    }, 60 * 60 * 1000); // 60 * 60* 1000 for 1 hour
    return () => clearTimeout(logoutTimer);
  }, []);

  return (
    <MyContext.Provider value={{ sharedValue, updateSharedValue }}>
      {children}
    </MyContext.Provider>
  );
};

const useMyContext = () => {
  return useContext(MyContext);
};

export { MyContextProvider, useMyContext };
