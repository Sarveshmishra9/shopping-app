// import { Link } from "react-router-dom";
import { useContext } from "react";
import { useUser } from "../userContext"; // adjust path if needed

import {
    Navbar,
    NavBody,
    NavItems,
    MobileNav,
    NavbarLogo,
    NavbarButton,
    MobileNavHeader,
    MobileNavToggle,
    MobileNavMenu,
} from "@/components/ui/resizable-navbar";
import { useState } from "react";
import { Link, Outlet } from "react-router";

export function NavbarFloating() {
    const navItems = [
        {
            name: "Men",
            link: "/category/men",
        },
        {
            name: "Women",
            link: "/category/women",
        },
        {
            name: "Kids",
            link: "/category/kids",
        },
    ];

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { user } = useUser(); // ✅ pulls user from context

    // const user = JSON.parse(localStorage.getItem("user") || "null");
    // const isAdmin = user?.isAdmin === "true" || user?.isAdmin === true;
    console.log("Logged in user:", user);

    return (
        <div className="relative">
            <Navbar>
                {/* Desktop Navigation */}
                <NavBody>
                    <NavbarLogo />
                    <NavItems items={navItems} />
                    <div className="flex items-center gap-4">


                        <Link to="/auth/login">
                            <NavbarButton variant="primary">
                                Login
                            </NavbarButton>
                        </Link>

                    </div>
                </NavBody>

                {/* Mobile Navigation */}
                <MobileNav>
                    <MobileNavHeader>
                        <NavbarLogo />
                        <MobileNavToggle
                            isOpen={isMobileMenuOpen}
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
                    </MobileNavHeader>

                    <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
                        {navItems.map((item, idx) => (
                            <a
                                key={`mobile-link-${idx}`}
                                href={item.link}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="relative text-neutral-600 dark:text-neutral-300">
                                <span className="block">{item.name}</span>
                            </a>
                        ))}
                        <div className="flex w-full flex-col gap-4">
                            <NavbarButton
                                onClick={() => setIsMobileMenuOpen(false)}
                                variant="primary"
                                className="w-full">
                                Login
                            </NavbarButton>
                            <NavbarButton
                                onClick={() => setIsMobileMenuOpen(false)}
                                variant="primary"
                                className="w-full">
                                Book a call
                            </NavbarButton>
                        </div>
                    </MobileNavMenu>
                </MobileNav>
            </Navbar>
            <Outlet />
        </div>
    );
}


