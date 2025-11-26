import { useState } from "react";
import api from "../api/axios";
import {jwtDecode} from 'jwt-decode';

export const useAuth = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const isTokenValid = () =>{
    const token = localStorage.getItem('token');
    
    if(!token) return false;

    try {
        const decoded = jwtDecode(token);
        const currentTime = Date.now() /1000;

        if(decoded.exp < currentTime){
            localStorage.removeItem('token');
            return false;
        }
        return true;
    }catch{
        localStorage.removeItem('token');
        return false;
    }
  }

  const getUserRole = () => {
    const token = localStorage.getItem('token');

    if(!token) return false;

    try{
        const decoded = jwtDecode(token);
        return decoded.role;

    }catch{
        return null;
    }
  }

  const login = async (email, password) => {
    setError("");
    setLoading(true);

    try {
      const response = await api.post("/auth/login", { email, password });

      const token = response.data.data.token;
      localStorage.setItem("token", token);

      return { success: true, token };
    } catch (error) {
      const errorMessage =
        error.response?.data?.message || "Erreur de connexion";
      setError(errorMessage);
      return { succes: false, error: errorMessage };
    } finally {
      setLoading(false);
    }
  };
  const logout = () => {
    localStorage.removeItem("token");
  };
  const isAuthenticated = () => {
    return isTokenValid();
  };

  const hasRole = (allowedRoles) => {
    const userRole = getUserRole();
    return allowedRoles.includes(userRole);
  }

  return {
    login,
    logout,
    isAuthenticated,
    hasRole,
    loading,
    error,
  };
};
