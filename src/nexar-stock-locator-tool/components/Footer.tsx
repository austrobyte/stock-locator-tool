import React from "react";
import styled from "styled-components";
import { IncomingColors } from "../types";
import { deviceWidths } from "../lib";

type FooterProps = {
  theme: IncomingColors;
};

const Footer = ({ theme }: FooterProps) => {
  return (
    <FooterContainer>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  font-size: 11px;
  line-height: 8px;
  margin: 40px;
  padding-top: 36px;

  @media (max-width: ${deviceWidths.phone}) {
    margin: 20px;
  }
`;

const FooterText = styled.div`
  padding-left: 12px;
  line-height: 16px;
  text-align: left;

  a {
    text-decoration: none;
  }
`;

const NexarLogo = styled.div`
  display: inline-block;
  padding: 12px;
  border-radius: 4px;
  position: relative;
`;

export default Footer;
