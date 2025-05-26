import { createContext, useContext, useState } from "react";

const LoginContext = createContext(false);

export function LoginProvider({ children }) {
  const [isLogin, setIsLogin] = useState(false);
  const switchLoginState = () => setIsLogin(!isLogin);

  return (
    <LoginContext.Provider value={[isLogin, switchLoginState]}>
      {children}
    </LoginContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useLogin = () => useContext(LoginContext);
