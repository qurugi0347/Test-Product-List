import React, {useMemo, ReactElement} from "react";
import styled from "styled-components";
import productSvg from "svg/menu/product.svg";
import recentSvg from "svg/menu/recent.svg";

import FooterMenuItem, {FooterMenuItemProps} from "./FooterMenuItem";

const menuProps: FooterMenuItemProps[] = [
  {
    icon: productSvg,
    name: "상품상세",
    url: "/product",
  },
  {
    icon: recentSvg,
    name: "조회이력",
    url: "/recentList",
  },
];

const FooterMenu = () => {
  const renderdItems: ReactElement[] = useMemo(() => {
    return menuProps.map((itemProps) => {
      return <FooterMenuItem {...itemProps} />;
    });
  }, []);

  return <FooterWrapper>{renderdItems}</FooterWrapper>;
};

const FooterWrapper = styled.div`
  position: fixed;
  width: 100vw;
  background: var(--white);
  bottom: 0;
  text-align: center;
  border-top: 1px solid var(--gray4);
  padding: 6px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
`;

export default FooterMenu;
