import React, {ReactElement} from "react";
import styled from "styled-components";
import HeaderSection from "./HeaderSection";
import FooterMenu from "./FooterMenu";

interface BaseLayoutProps {
  children?: string | ReactElement;
}

const BaseLayout = ({children}: BaseLayoutProps) => {
  return (
    <>
      <HeaderSection />
      <ContentWrapper id="contentWrapper">{children}</ContentWrapper>
      <FooterMenu />
    </>
  );
};

const ContentWrapper = styled.div`
  height: calc(100vh - 56px);
  /* Footer Padding */
  padding-bottom: 56px;
  overflow-y: scroll;
`;

export default BaseLayout;
