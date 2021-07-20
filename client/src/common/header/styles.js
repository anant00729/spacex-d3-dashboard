import styled from "styled-components";

export const HeaderWrapper = styled.div`
  grid-area: header;
  /* border: 10px solid purple; */
  display: flex;
  padding: 0 24px;
  align-items: center;
  background-color: #333333;
`;

export const AppName = styled.img`
  border: 2px solid #fff;
  border-radius: 50%;
  height: 50px;
`;

export const AppTitle = styled.label`
  color: white;
  margin-left: 16px;
  font-weight: 600;
  font-size: 24px;
`;

export const ProfilePic = styled.img`
  border: 2px solid #fff;
  margin-left: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  height: 40px;
`;

export const UserName = styled.div`
  /* border: 10px solid blue; */
  display: none;

  @media (min-width: 974px) {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 10px;
    height: 50px;
    color: white;
    font-weight: 600;
  }
`;

export const HambergerMenu = styled.img`
  /* border: 10px solid teal; */
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  height: 32px;
`;
