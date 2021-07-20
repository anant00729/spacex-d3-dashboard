import styled from "styled-components";

export const LaunchTimelineWrapper = styled.div`
  /* border: 10px solid brown; */
  overflow-y: auto;
  margin: 0 10px;
`;

export const TimeLineItem = styled.div`
  padding: 10px;
  margin: 8px 0;
  background-color: #333333;
  display: flex;
  align-items: center;
  border-radius: 8px;
  box-shadow: rgb(0 0 0 / 10%) 0px 10px 15px -3px,
    rgb(0 0 0 / 5%) 0px 4px 6px -2px;
`;

export const LaunchStatusIcon = styled.img`
  width: 32px;
  height: 32px;
  margin-right: 12px;
  background-color: ${(p) => (p.upcoming ? "#3898d4" : "#00ad76")};
  border-radius: 50%;
`;

export const MissionNameLabel = styled.label`
  color: white;
`;
