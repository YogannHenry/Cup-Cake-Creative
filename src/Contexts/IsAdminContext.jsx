import React, { createContext, useState, useContext } from 'react';

// Création du contexte
const IsAdminContext = createContext();

// Hook personnalisé pour utiliser le contexte
export const useIsAdmin = () => useContext(IsAdminContext);

// Provider du contexte
export const IsAdminProvider = ({ children }) => {
  const [isAdmin, setIsAdmin] = useState(false);

  const toggleIsAdmin = () => {
    setIsAdmin(prevIsAdmin => !prevIsAdmin);
    console.log("toggleIsAdmin:", isAdmin);
  };

  return (
    <IsAdminContext.Provider value={{ isAdmin, toggleIsAdmin }}>
      {children}
    </IsAdminContext.Provider>
  );
};
