import styled from "styled-components";

const BaseButton = styled.button`
  border: 1px solid var(--gray1);
  text-align: center;

  &.fill {
    width: 100%;
    padding: 14px;
    border-radius: 12px;
  }
  &.small {
    padding: 7px 11px;
    font-size: 12px;
    font-weight: 400;
    line-height: 15px;
  }
`;

export default BaseButton;
