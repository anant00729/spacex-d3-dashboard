import styled from "styled-components";

export const SideBarWrapper = styled.div`
  grid-area: sidebar;
  /* border: 10px solid skyblue; */
  /* border: 1px solid #333; */
  box-shadow: 10px 0 5px -2px #f8fafb;
  display: none;

  @media (min-width: 974px) {
    display: unset;
  }
`;
