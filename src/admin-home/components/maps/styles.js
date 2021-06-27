import styled from "styled-components";

export const MapsWrapper = styled.div`
  /* border: 10px solid pink; */
  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    height: 230px;
    width: 400px;

    @media (min-width: 974px) {
      width: 370px;
    }
  }
`;
