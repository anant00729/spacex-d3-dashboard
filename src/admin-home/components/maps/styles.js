import styled from "styled-components";

export const MapsWrapper = styled.div`
  /* border: 10px solid pink; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 24px;

  @media (min-width: 974px) {
    margin-top: unset;
  }

  svg {
    height: 230px;
    width: 400px;

    @media (min-width: 974px) {
      width: 370px;
    }
  }
`;
