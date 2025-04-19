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
import MenPage from "./pages/men-page.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<App />}>
                        <Route path="/" element={<DummyContent />} />
                        <Route path="auth" element={<AuthPage />}>
                            <Route path="login" element={<SigninForm />} />
                            <Route path="register" element={<SignupForm />} />
                        </Route>
                        <Route path="/men" element={<MenPage />} />
                        <Route path="/women" element={<DummyContent />} />
                        <Route path="/kids" element={<DummyContent />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </ThemeProvider>
    </StrictMode>
);
