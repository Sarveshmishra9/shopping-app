import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import App from "./App.jsx";
import { ThemeProvider } from "./components/providers/theme-provider.jsx";
import SignupForm from "./components/signup-form.jsx";
import SigninForm from "./components/signin-form.jsx";
import "./index.css";
import AuthPage from "./pages/auth-page.jsx";
import { DummyContent } from "./components/dummy-content.jsx";
import CategoryPage from "./pages/category-page.jsx";
import { MenCategorySection } from "./sections/men-category-section.jsx";
import { WomenCategorySection } from "./sections/women-category-section.jsx";
import { KidsCategorySection } from "./sections/kids-category-section.jsx";
<<<<<<< HEAD
// import HomePage from "./pages/home-page.jsx"; // ✅ Import HomePage




createRoot(document.getElementById("root")).render(
    <StrictMode>
        
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />}>
                    {/* <Route index element={<HomePage />} /> ✅ HomePage route */}

                        <Route path="/" element={<DummyContent />} />
=======
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/" element={<DummyContent />} />
>>>>>>> upstream/main

            <Route path="auth" element={<AuthPage />}>
              <Route path="login" element={<SigninForm />} />
              <Route path="register" element={<SignupForm />} />
            </Route>
            <Route path="category" element={<CategoryPage />}>
              <Route path="men" element={<MenCategorySection />} />
              <Route path="women" element={<WomenCategorySection />} />
              <Route path="kids" element={<KidsCategorySection />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
);
