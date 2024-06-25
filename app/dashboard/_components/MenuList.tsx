"use client";

import {
  FileClock,
  FileQuestion,
  HandCoins,
  LayoutDashboard,
  Settings,
} from "lucide-react";
import { usePathname } from "next/navigation";
import React, { useEffect } from "react";

type Props = {};

function MenuList({}: Props) {
  const MenuList = [
    {
      name: "Home",
      icon: LayoutDashboard,
      path: "/dashboard",
    },
    {
      name: "History",
      icon: FileClock,
      path: "/dashboard/history",
    },
    {
      name: "Interviews",
      icon: FileQuestion,
      path: "/dashboard/questions",
    },
    {
      name: "Billing",
      icon: HandCoins,
      path: "/dashboard/billing",
    },
    {
      name: "Settings",
      icon: Settings,
      path: "/dashboard/settings",
    },
  ];

  const path = usePathname();
  useEffect(() => {
    console.log(path);
  });
  return (
    <div className="mt-12">
      {MenuList.map((menu, index) => (
        <div
          key={index}
          className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer items-center ${
            path == menu.path && "bg-primary text-white"
          }`}
        >
          <menu.icon className="h-8 w-8" />
          <h2 className="text-lg">{menu.name}</h2>
        </div>
      ))}
    </div>
  );
}

export default MenuList;
