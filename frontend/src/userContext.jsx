// import { createContext, useContext, useState, useEffect } from "react";
//
// // 1. Create context
// const UserContext = createContext();
//
// // 2. Create a provider component
// export const UserProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//
//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const res = await fetch("http://localhost:8080/api/users/me", {
//           method: "GET",
//           credentials: "include", // ✅ includes the cookie with request
//         });
//         const user = await res.json();
//         if (user && user.email) {
//           setUser(user);
//         }
//       } catch (err) {
//         console.error("User fetch failed:", err.message);
//       }
//     };
//     fetchUser();
//   }, []);
//
//   return (
//     <UserContext.Provider value={{ user, setUser }}>
//       {children}
//     </UserContext.Provider>
//   );
// };
//
// // 3. Custom hook to use UserContext easily
// export const useUser = () => useContext(UserContext);
