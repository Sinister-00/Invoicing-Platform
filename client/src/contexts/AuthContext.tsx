import axios from 'axios';
import { LOCAL_STORAGE_KEYS } from 'entities/local-storage';
import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const AuthContext = createContext({
  token: '',
  setToken: (newToken: string) => {
    return;
  },
});

const AuthProvider: React.FC = ({ children }) => {
  const [token, setToken_] = useState(
    localStorage.getItem(LOCAL_STORAGE_KEYS.TOKEN) || '',
  );

  const setToken = (newToken: string) => setToken_(newToken);

  useEffect(() => {
    if (token) {
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + token;
      localStorage.setItem(LOCAL_STORAGE_KEYS.TOKEN, token);
    } else {
      delete axios.defaults.headers.common['Authorization'];
      localStorage.removeItem(LOCAL_STORAGE_KEYS.TOKEN);
    }
  }, [token]);

  const contextValue = useMemo(
    () => ({
      token,
      setToken,
    }),
    [token],
  );

  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};

export default AuthProvider;
