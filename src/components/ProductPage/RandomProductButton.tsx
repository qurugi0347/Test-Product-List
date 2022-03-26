import React from "react";
import styled from "styled-components";

import BaseButton from "components/ui/button";

interface RandomProductButtonProps {
  onClickButton: () => void;
}

const RandomProductButton = ({onClickButton}: RandomProductButtonProps) => {
  return (
    <RandomButton className="fill" onClick={onClickButton}>
      랜덤 상품 조회
    </RandomButton>
  );
};

const RandomButton = styled(BaseButton)`
  margin: 26px 0;
`;

export default RandomProductButton;
