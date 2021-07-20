import React from "react";
import {
  HeaderWrapper,
  AppName,
  ProfilePic,
  UserName,
  HambergerMenu,
  AppTitle,
} from "./styles";
import MenuIcon from "../../images/menu.png";

import AppIcon from "../../../src/images/appIcon.png";
import ProfileImg from "../../../src/images/profile_img.png";

function Header() {
  return (
    <HeaderWrapper>
      <AppName src={AppIcon} alt="app-icon" />
      <AppTitle>Space X</AppTitle>
      <ProfilePic src={ProfileImg} alt="profile-icon" />
      <UserName>
        <label>Arnav S Awasthi</label>
      </UserName>
      <HambergerMenu src={MenuIcon} alt="menu-icon" />
    </HeaderWrapper>
  );
}

export default Header;
