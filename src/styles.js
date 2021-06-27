import styled from "styled-components";

export const AppWrapper = styled.div`
  display: grid;
  background-color: white;
  width: 100vw;
  min-height: 100vh;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: 90px 1fr;
  grid-template-areas:
    "header header header header header header header header"
    "sidebar main-body main-body main-body main-body main-body main-body main-body";
`;
