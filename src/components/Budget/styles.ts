import styled from "styled-components";

export const StyledBudget = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  border-radius: 10px;
  padding: 0 20px;
  background-color: #7cc6fe;
`;

export const Button = styled.button`
  width: 85px;
  height: 36px;
  border: 0;
  border-radius: 10px;
  background-color: #ffffff;
  font-family: "Inter", "sans-serif";
  font-weight: 500;
  font-size: 14px;
  cursor: pointer;
`;

export const StyledSpan = styled.span`
  font-weight: 500;
  font-size: 20px;
`;

export const StyledInput = styled.input`
  width: 153px;
  font-family: "Inter", "sans-serif";
  font-weight: 500;
  font-size: 20px;
  line-height: 24px;
  color: #ffffff;
  background-color: transparent;
  border: 0;

  &::placeholder {
    color: #ffffff;
  }

  &:focus-visible {
    outline: 0;
  }
`;
