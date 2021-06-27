import styled from "styled-components";

export const AdminHomeWrapper = styled.div`
  grid-area: main-body;
  border: 10px solid tomato;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
`;

export const PageTitleWrapper = styled.div`
  padding: 16px;
`;

export const PageTitle = styled.label`
  font-size: 24px;
`;

export const AnalysisWrapper = styled.div`
  display: grid;
  border: 10px solid purple;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(3, 250px);
  flex: 1;

  @media (min-width: 974px) {
    border: 10px solid purple;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: calc(100vh - 405px);
  }
`;
