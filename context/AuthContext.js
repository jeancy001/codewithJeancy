import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';

// Create Context
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadStorageData = async () => {
      try {
        const storedUser = await AsyncStorage.getItem('user');
        const storedToken = await AsyncStorage.getItem('token');
        if (storedUser && storedToken) {
          setUser(JSON.parse(storedUser));
          setToken(storedToken);
        }
      } catch (error) {
        console.error('Error loading storage data:', error.message);
      } finally {
        setLoading(false);
      }
    };
    loadStorageData();
  }, []);

  // Register
  const register = async (username, email, password) => {
    try {
      const response = await axios.post('http://192.168.100.3:3001/auth/register', {
        username,
        email,
        password
      });

      const { user } = response.data;
      if (!user) {
        throw new Error('Invalid response data');
      }

      setUser(user); // Set the user state, but don't store in AsyncStorage
    } catch (error) {
      console.error('Registration error:', error.response?.data || error.message);
    }
  };

  // Login
  const login = async (email, password) => {
    try {
      const response = await axios.post('http://192.168.100.3:3001/auth/login', {
        email,
        password
      });
      const { user, token } = response.data;

      // Check if response contains expected data
      if (!user || !token) {
        throw new Error('Invalid response data');
      }

      setUser(user); // Set the user state
      setToken(token); // Set the token state

      // Save to AsyncStorage
      await AsyncStorage.setItem('user', JSON.stringify(user));
      await AsyncStorage.setItem('token', token);
    } catch (error) {
      console.error('Login error:', error.response?.data || error.message);
    }
  };

  // Logout
  const logout = async () => {
    try {
      setUser(null);
      setToken(null);

      await AsyncStorage.removeItem('user');
      await AsyncStorage.removeItem('token');
    } catch (error) {
      console.error('Logout error:', error.message);
    }
  };

  return (
    <AuthContext.Provider value={{ user, token, loading, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

