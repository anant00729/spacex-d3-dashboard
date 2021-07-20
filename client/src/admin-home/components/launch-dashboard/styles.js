import styled from "styled-components";

export const LaunchDashboardWrapper = styled.div`
  /* border: 10px solid brown; */
`;

export const PageTitleWrapper = styled.div`
  padding: 16px;
`;

export const PageTitle = styled.label`
  font-size: 20px;
`;

export const DashboardCountWrapper = styled.div`
  padding: 0 8px;
  /* border: 10px solid skyblue; */
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 120px;
  column-gap: 16px;
`;

export const CountCard = styled.div`
  background-color: #333333;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 8px;
  box-shadow: rgb(0 0 0 / 10%) 0px 10px 15px -3px,
    rgb(0 0 0 / 5%) 0px 4px 6px -2px;
`;

export const CountLabel = styled.label`
  font-size: 32px;
  margin-bottom: 8px;
`;

export const LaunchStatusLabel = styled.label`
  text-align: center;
`;
