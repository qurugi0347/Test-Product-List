import React from "react";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";
import headerLogo from "svg/logo/header.svg";
import backIcon from "svg/common/arrowL.svg";

const HeaderSection = () => {
  const navigate = useNavigate();

  return (
    <Header>
      <Back src={backIcon} onClick={() => navigate(-1)} />
      <Logo src={headerLogo} />
    </Header>
  );
};

const Header = styled.header`
  position: sticky;
  top: 0;
  height: 56px;
  width: 100%;
  * {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const Logo = styled.img`
  left: 50%;
  transform: translate(-50%, -50%);
`;

const Back = styled.img`
  left: 20px;
`;

export default HeaderSection;
