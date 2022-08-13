import styled from "styled-components";

interface IProps {
  remaining: number;
}

export const StyledRemaining = styled.div<IProps>`
  display: flex;
  align-items: center;
  height: 100px;
  border-radius: 10px;
  padding: 0 20px;
  background-color: #CCD5FF;

  ${(props) => (props.remaining < 0 ? "background-color: #FF0000; color: #FFFFFF; font-weight: 700;" : "")}
  
`;

export const StyledSpan = styled.span`
font-weight: 500;
font-size: 20px;
`