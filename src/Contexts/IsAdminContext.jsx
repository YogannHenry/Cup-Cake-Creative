/* eslint-disable react/prop-types */
import { createContext, useState, useContext } from 'react';

const IsAdminContext = createContext();

export const useIsAdmin = () => useContext(IsAdminContext);







export const IsAdminProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);

  const toggleIsAdmin = () => {
    setIsAdmin(prevIsAdmin => !prevIsAdmin);
  };

  return (
    <IsAdminContext.Provider value={{ isAdmin, toggleIsAdmin }}>
      {children}
    </IsAdminContext.Provider>
  );
};
