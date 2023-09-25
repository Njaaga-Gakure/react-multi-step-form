import { useState, useContext, createContext } from "react";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isMonthly, setIsMonthly] = useState(true);
  const setPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };
  const setSubscription = () => {
    setIsMonthly(!isMonthly);
  };
  return (
    <AppContext.Provider
      value={{ currentPage, setPage, isMonthly, setSubscription }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
