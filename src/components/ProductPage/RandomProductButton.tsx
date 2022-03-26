import React from "react";
import styled from "styled-components";

import BaseButton from "components/ui/button";
import shuffleSvg from "svg/common/shuffle.svg";

interface RandomProductButtonProps {
  onClickButton: () => void;
}

const RandomProductButton = ({onClickButton}: RandomProductButtonProps) => {
  return (
    <RandomButton className="fill" onClick={onClickButton}>
      <TextWrapper>
        <ShuffleIcon src={shuffleSvg} />
        <span>랜덤 상품 조회</span>
      </TextWrapper>
    </RandomButton>
  );
};

const RandomButton = styled(BaseButton)`
  margin: 26px 0;
  position: relative;
`;

const TextWrapper = styled.div``;

const ShuffleIcon = styled.img`
  position: relative;
  top: 10px;
  transform: translateY(-50%);
  margin-right: 6px;
`;

export default RandomProductButton;
