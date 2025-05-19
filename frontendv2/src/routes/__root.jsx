import { createRootRoute, Link, Outlet } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/react-router-devtools";
import { ThemeProvider } from "../providers/theme-provider";
import Navbar from "@/components/navbar-component";

export const Route = createRootRoute({
  component: () => (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Navbar></Navbar>
        {/* <div className="p-2 flex gap-2"> */}
        {/*   <Link to="/" className="[&.active]:font-bold"> */}
        {/*     Home */}
        {/*   </Link>{" "} */}
        {/*   <Link to="/about" className="[&.active]:font-bold"> */}
        {/*     About */}
        {/*   </Link> */}
        {/* </div> */}
        {/* <hr /> */}
        <Outlet />
      </ThemeProvider>
      <TanStackRouterDevtools />
    </>
  ),
});
