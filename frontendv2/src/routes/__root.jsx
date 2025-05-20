import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { ThemeProvider } from "../providers/theme-provider";
import { NavbarComponent } from "../components/navbar-component";

export const Route = createRootRoute({
  component: () => (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <NavbarComponent></NavbarComponent>
      </ThemeProvider>
      <TanStackRouterDevtools />
    </>
  ),
});
