import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
  margin: 30px auto;
  width: 335px;

  @media (min-width: 768px) {
    width: 700px;
  }

  @media (min-width: 1224px) {
    width: 1000px;
  }

`;

export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

