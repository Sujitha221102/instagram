import React, { createContext, useContext, useState } from "react";
import Details from "../DefaultData"
const AppContext = createContext();

export const useAppContext = () => {
  return useContext(AppContext);
};

export const AppProvider = ({ children }) => {
  const [noOfUsers, setNoOfUsers] = useState([]);
  const [userName,setUserName] = useState("");
  const [objectsArray, setObjectsArray] = useState(Details); 
  const [save, setSave] = useState([]);
  const [click, setClick] = useState([]);
  const [postArr, setPostArr] = useState([]);
  const [savedPage, setSavedPage] = useState(false);

  const updateObjectsArray = (newObjectsArray) => {
    setObjectsArray(newObjectsArray);
  };

  const contextValue = {
    userName,setUserName,
    noOfUsers,setNoOfUsers,
    objectsArray,
    setObjectsArray,
    updateObjectsArray,
    click,setClick,
    save,setSave,savedPage,setSavedPage,
    postArr,setPostArr,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};
