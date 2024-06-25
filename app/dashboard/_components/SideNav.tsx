import React from "react";
import Logo from "./Logo";
import MenuList from "./MenuList";

type Props = {};

function SideNav({}: Props) {
  return (
    <div className="h-screen p-5 shadow-sm border bg-white">
      <div className="flex justify-center">
        <Logo />
      </div>
      <div>
        <MenuList />
      </div>
    </div>
  );
}

export default SideNav;
