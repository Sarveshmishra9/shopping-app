import React, { useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "./ui/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import { Outlet } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import CategoryFilterPicker from "./category-filter-picker";
import { AlignJustify, IndianRupee, Shirt, SwatchBook } from "lucide-react";
import SizeFilterPicker from "./size-filter-picker";
import ThemeFilterPicker from "./theme-filter-picker";
import PriceFilterPicker from "./price-filter-picker";

export function SidebarComponent() {
  const links = [
    {
      label: <CategoryFilterPicker />,
      icon: <AlignJustify />,
    },
    {
      label: <SizeFilterPicker />,
      icon: <Shirt />,
    },
    {
      label: <PriceFilterPicker />,
      icon: <IndianRupee />,
    },
    {
      label: <ThemeFilterPicker />,
      icon: <SwatchBook />,
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        "mx-auto mt-10 flex w-full flex-1 flex-col rounded-md bg-gray-100 md:flex-row dark:bg-[#0a0a0a]",
        // for your use case, use `h-screen` instead of `h-[60vh]`
        "h-full",
      )}
    >
      <Sidebar open={open} setOpen={setOpen} animate={true}>
        <SidebarBody className="sticky top-0 dark:bg-[#0a0a0a] justify-between gap-10">
          <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
            <div className="sidebar-options mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
          <div></div>
        </SidebarBody>
      </Sidebar>
      <div className="flex flex-1 flex-col overflow-x-hidden overflow-y-auto justify-center items-center">
        <Outlet />
      </div>
    </div>
  );
}
