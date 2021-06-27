import styled from "styled-components";

export const SideBarWrapper = styled.div`
  grid-area: sidebar;
  border: 10px solid skyblue;
  display: none;

  @media (min-width: 974px) {
    display: unset;
  }
`;
