import React from "react";
import {
  HeaderWrapper,
  AppName,
  ProfilePic,
  UserName,
  HambergerMenu,
} from "./styles";

function Header() {
  return (
    <HeaderWrapper>
      {/* App Name */}
      <AppName>App Name</AppName>
      {/* Profile pic */}
      <ProfilePic>Profile pic</ProfilePic>
      {/* Username */}
      <UserName>Username</UserName>
      {/* Hamberger Menu */}
      <HambergerMenu>Hamberger Menu</HambergerMenu>
    </HeaderWrapper>
  );
}

export default Header;
