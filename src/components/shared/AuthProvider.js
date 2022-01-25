import React, { createContext, useState, useContext } from "react";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
  const [profile, setProfile] = useState({
    name: "Naldo",
    avatar: "/images/avatar_feo.png",
  });
  return (
    <AuthContext.Provider value={{ profile, setProfile }}>
      {children}
    </AuthContext.Provider>
  );
}
export const useAuth = () => useContext(AuthContext);