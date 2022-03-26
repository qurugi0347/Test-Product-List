import React, {useCallback} from "react";
import {useNavigate} from "react-router-dom";
import styled from "styled-components";

export interface FooterMenuItemProps {
  icon: string;
  name: string;
  url: string;
}

const FooterMenuItem = ({name, url, icon}: FooterMenuItemProps) => {
  const navigate = useNavigate();

  const navigateToUrl = useCallback(() => {
    if (url && window.location.pathname !== url) {
      navigate(url);
    }
  }, [url, window.location.pathname]);

  return (
    <ItemWrapper onClick={navigateToUrl}>
      <SvgIcon src={icon} />
      <MenuName>{name}</MenuName>
    </ItemWrapper>
  );
};

const ItemWrapper = styled.button`
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  text-align: center;
  color: var(--gray1);
`;

const MenuName = styled.div`
  margin-top: 4px;
`;

const SvgIcon = styled.img``;

export default FooterMenuItem;
