import React, { createContext, useState, useEffect, useContext } from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

const UserContext = createContext({
  user: null,
  setUser: () => {}, // swapped later
});

export function UserProvider({ children }) {
  const [user, setUserState] = useState(null);

  const setUser = (userData) => {
    setUserState(userData);
  };

  useEffect(() => {
    console.log("inside use effect of user provider (Context API)");
    const accessToken = Cookies.get("accessToken");
    console.log("access token from cookies:", accessToken);

    if (accessToken) {
      try {
        const userPayload = jwtDecode(accessToken);
        console.log("user payload:", userPayload);

        // Set the user state based on the decoded token
        // setUser({
        //   userId: userPayload.id,
        //   userEmail: userPayload.email,
        //   userFirstName: userPayload.firstName,
        //   userLastName: userPayload.lastName,
        //   userAvatarUrl: userPayload.avatarUrl,
        // });
      } catch (error) {
        console.error("Failed to decode access token:", error);
        Cookies.remove("accessToken");
        setUser(null); // Clear user state
      }
    }
  }, []);

  const contextValue = {
    user,
    setUser,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
}

export function useUser() {
  // Export the hook
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }

  return context; // Returns { user, setUser }
}
