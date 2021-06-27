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
  "https://scontent.fbom12-1.fna.fbcdn.net/v/t1.6435-9/29103539_1296943310449981_4247130534372704256_n.jpg?_nc_cat=108&ccb=1-3&_nc_sid=174925&_nc_eui2=AeFG08RztulgpwgWVCJWWK4MHnvMfhkPqpkee8x-GQ-qmWvtUZ-yLuv3geubSqvkGQQ&_nc_ohc=zrKVKkivkwIAX9lbhCB&_nc_ht=scontent.fbom12-1.fna&oh=913c2e013f55a96b009c27c1c7acbd8a&oe=60DE5BEA";

function Header() {
  return (
    <HeaderWrapper>
      <AppName src={AppIcon} alt="app-icon" />
      <AppTitle>Space X</AppTitle>
      <ProfilePic src={ProfileImg} alt="profile-icon" />
      <UserName>
        <label>Karnadeep Rana</label>
      </UserName>
      <HambergerMenu src={MenuIcon} alt="menu-icon" />
    </HeaderWrapper>
  );
}

export default Header;
