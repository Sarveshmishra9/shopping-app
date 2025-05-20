import { NavbarFloating } from "./components/floating-navbar";
import { Toaster } from "sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import UserProvider from "./components/providers/user-provider";
//tanstack query client
const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <div>
          <Toaster />
          <NavbarFloating />
        </div>
      </UserProvider>
    </QueryClientProvider>
  );
}

export default App;
