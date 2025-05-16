"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

// Define user types and auth state
export type UserRole = "user" | "creator";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  avatar?: string;
  // Additional fields based on role
  creatorProfile?: {
    handle: string;
    bio: string;
    followers: number;
    categories: string[];
  };
}

interface AuthState {
  user: User | null;
  isLoading: boolean;
  error: string | null;
}

interface AuthContextType extends AuthState {
  login: (email: string, password: string, role: UserRole) => Promise<void>;
  signup: (userData: Partial<User>, password: string) => Promise<void>;
  logout: () => void;
  clearError: () => void;
}

// Create context with default values
const AuthContext = createContext<AuthContextType>({
  user: null,
  isLoading: true,
  error: null,
  login: async () => {},
  signup: async () => {},
  logout: () => {},
  clearError: () => {},
});

// Context provider component
export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [authState, setAuthState] = useState<AuthState>({
    user: null,
    isLoading: true,
    error: null,
  });
  const router = useRouter();

  // Check for existing session on mount
  useEffect(() => {
    const checkAuth = async () => {
      try {
        // In a real app, you would validate the token with your backend
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
          setAuthState({
            user: JSON.parse(storedUser),
            isLoading: false,
            error: null,
          });
        } else {
          setAuthState({
            user: null,
            isLoading: false,
            error: null,
          });
        }
      } catch (error) {
        setAuthState({
          user: null,
          isLoading: false,
          error: "Failed to restore session",
        });
      }
    };

    // Only run in browser environment
    if (typeof window !== "undefined") {
      checkAuth();
    }
  }, []);

  const login = async (email: string, password: string, role: UserRole) => {
    setAuthState((prev) => ({ ...prev, isLoading: true, error: null }));

    try {
      // In a real app, this would be an API call to your authentication endpoint
      // Simulating API call with timeout
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Mock authentication logic
      if (email && password) {
        // For demo purposes, create a mock user
        const mockUser: User = {
          id: `user-${Date.now()}`,
          name: email.split("@")[0],
          email,
          role,
          avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${email}`,
          ...(role === "creator" && {
            creatorProfile: {
              handle: email.split("@")[0].toLowerCase(),
              bio: "Creator bio goes here",
              followers: Math.floor(Math.random() * 1000),
              categories: ["Fashion"],
            },
          }),
        };

        // Store in local storage
        localStorage.setItem("user", JSON.stringify(mockUser));

        setAuthState({
          user: mockUser,
          isLoading: false,
          error: null,
        });

        // Redirect based on user role
        if (role === "creator") {
          router.push("/creator/dashboard");
        } else {
          router.push("/account/dashboard");
        }
      } else {
        throw new Error("Invalid credentials");
      }
    } catch (error) {
      setAuthState((prev) => ({
        ...prev,
        isLoading: false,
        error: error instanceof Error ? error.message : "Login failed",
      }));
    }
  };

  const signup = async (userData: Partial<User>, password: string) => {
    setAuthState((prev) => ({ ...prev, isLoading: true, error: null }));

    try {
      // In a real app, this would be an API call to register the user
      await new Promise((resolve) => setTimeout(resolve, 1000));

      if (userData.email && userData.name && userData.role) {
        // Create a new user
        const newUser: User = {
          id: `user-${Date.now()}`,
          name: userData.name,
          email: userData.email,
          role: userData.role,
          avatar: `https://api.dicebear.com/7.x/avataaars/svg?seed=${userData.email}`,
          ...(userData.role === "creator" && {
            creatorProfile: {
              handle: userData.email.split("@")[0].toLowerCase(),
              bio:
                userData.role === "creator"
                  ? (userData as any).bio || "New creator"
                  : "",
              followers: 0,
              categories:
                userData.role === "creator"
                  ? (userData as any).categories || ["Fashion"]
                  : [],
            },
          }),
        };

        // Store in local storage
        localStorage.setItem("user", JSON.stringify(newUser));

        setAuthState({
          user: newUser,
          isLoading: false,
          error: null,
        });

        // Redirect based on user role
        if (userData.role === "creator") {
          router.push("/creator/dashboard");
        } else {
          router.push("/account/dashboard");
        }
      } else {
        throw new Error("Missing required fields");
      }
    } catch (error) {
      setAuthState((prev) => ({
        ...prev,
        isLoading: false,
        error: error instanceof Error ? error.message : "Signup failed",
      }));
    }
  };

  const logout = () => {
    // Clear user data from local storage
    localStorage.removeItem("user");

    // Reset auth state
    setAuthState({
      user: null,
      isLoading: false,
      error: null,
    });

    // Redirect to home page
    router.push("/");
  };

  const clearError = () => {
    setAuthState((prev) => ({ ...prev, error: null }));
  };

  return (
    <AuthContext.Provider
      value={{
        ...authState,
        login,
        signup,
        logout,
        clearError,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

// Custom hook for using auth context
export function useAuth() {
  return useContext(AuthContext);
}
