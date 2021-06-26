import styled from "styled-components";

export const LaunchDashboardWrapper = styled.div`
  border: 10px solid brown;
`;

export const PageTitleWrapper = styled.div`
  padding: 16px;
`;

export const PageTitle = styled.label`
  font-size: 20px;
`;

export const DashboardCountWrapper = styled.div`
  border: 10px solid skyblue;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 120px;
  column-gap: 16px;
`;

export const UpcomingCountCard = styled.div`
  border: 10px solid red;
`;

export const PastCountCard = styled.div`
  border: 10px solid purple;
`;

export const TotalCountCard = styled.div`
  border: 10px solid tomato;
`;
