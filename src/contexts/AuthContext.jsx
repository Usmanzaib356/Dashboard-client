import React, { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
export const AuthContext = createContext();


const AuthContextProvider = ({ children }) => {


  const [islogin, setIsLogin] = useState(false)
  const [rolee] = useState("")
  const [theme, setTheme] = useState(localStorage.getItem('theme') === 'dark' ? true : false)

 console.log(rolee) ;

  useEffect(() => {
    localStorage.setItem('theme', theme ? 'dark' : 'light');
  }, [theme]);


  useEffect(() => {
    const check = Cookies.get("islogin")
    if (check === 'true') {
      return setIsLogin(true)
    }
  }, [])


  const [sidebar,setSidebar] = useState(false)



  const Server_Url = "https://famous-jacket-goat.cyclic.app"


  return (
    <AuthContext.Provider value={{ Server_Url, islogin, setIsLogin, theme, setTheme,sidebar,setSidebar }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
