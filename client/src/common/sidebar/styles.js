import styled from "styled-components";

export const SideBarWrapper = styled.div`
  grid-area: sidebar;
  /* border: 10px solid skyblue; */
  box-shadow: 10px 0 5px -2px #f8fafb;
  display: none;

  @media (min-width: 974px) {
    display: unset;
  }
`;

export const SidebarItem = styled.div`
  padding: 10px;
  margin: 8px;
  background-color: #333333;
  display: flex;
  align-items: center;
  border-radius: 8px;
  box-shadow: rgb(0 0 0 / 10%) 0px 10px 15px -3px,
    rgb(0 0 0 / 5%) 0px 4px 6px -2px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 600;
`;

export const MenuIcon = styled.img`
  width: 24px;
  height: 24px;
  margin-right: 4px;
`;
