import { Button } from "./components/ui/button";
import { NavbarFloating } from "./components/floating-navbar";
import { Outlet } from "react-router";
import { DummyContent } from "./components/dummy-content";
function App() {
    return (
        <div>
            <NavbarFloating />
        </div>
    );
}
export default App;
