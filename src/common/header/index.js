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
const ProfileImg =
  "https://media-exp3.licdn.com/dms/image/C4D03AQFJh-12glcz4w/profile-displayphoto-shrink_800_800/0/1517229556085?e=1630540800&v=beta&t=bW2YePek9244VkHl2cTQe1Q1SdRbC2tr8oWzQMMxFLk";

function Header() {
  return (
    <HeaderWrapper>
      {/* App Name */}
      <AppName src={AppIcon} alt="app-icon" />
      <AppTitle>Space X</AppTitle>
      {/* Profile pic */}

      <ProfilePic src={ProfileImg} alt="app-icon" />
      {/* Username */}
      <UserName>
        <label>Anant S Awasthy</label>
      </UserName>
      {/* Hamberger Menu */}
      <HambergerMenu src={MenuIcon} alt="menu-icon" />
    </HeaderWrapper>
  );
}

export default Header;
