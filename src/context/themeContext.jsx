<<<<<<< HEAD
=======
/* eslint-disable react/prop-types */
>>>>>>> 32d77f7c823ec37ea4b7b234360e60b68bdccf83
import { createContext, useState } from "react";

export const ThemeContext = createContext();

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState({ name: "theme-green", color: "#299D91" });

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};