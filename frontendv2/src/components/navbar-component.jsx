import { Target } from "lucide-react";
import { Button } from "./ui/button";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-start">
        <Logo></Logo>
      </div>
      <div className="navbar-links"></div>
      <div className="navbar-end"></div>
    </div>
  );
}

const NavbarLink = ({ children, to_path }) => {
  return <Button className="navbar-link"></Button>;
};

const Logo = () => {
  return (
    <div className="flex items-center">
      <Target></Target>
      <span className="text-xl font-bold">HeroFit</span>
    </div>
  );
};
