import React from "react";
import { SideBarWrapper, SidebarItem, MenuIcon } from "./styles";
import HomeIcon from "../../images/home.png";

function SideBar() {
  return (
    <SideBarWrapper>
      <SidebarItem>
        <MenuIcon src={HomeIcon} alt="home-sidebar" />
        <label>Home</label>
      </SidebarItem>
    </SideBarWrapper>
  );
}

export default SideBar;
