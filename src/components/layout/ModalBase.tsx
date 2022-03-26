import {ReactElement} from "react";
import styled from "styled-components";

const ModalBase = ({
  children,
  onClickBack,
}: {
  children?: ReactElement | ReactElement[];
  onClickBack: () => void;
}) => {
  return (
    <ModalWarpper>
      <ModalBack onClick={onClickBack} />
      {children}
    </ModalWarpper>
  );
};

const ModalWarpper = styled.div`
  position: fixed;
  z-index: 10;
  width: 100vh;
  height: 100vh;
  left: 0;
  top: 0;
  background: transparent;
`;

const ModalBack = styled.div`
  width: 100vh;
  height: 100vh;
  left: 0;
  top: 0;
  background: var(--black);
  opacity: 0.5;
`;

export default ModalBase;
