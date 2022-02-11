import React from "react";
import { FaDiscord, FaTwitter } from "react-icons/fa";

import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Marketplace</LinkTitle>
          <LinkItem href="#">All NFT's</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Resources</LinkTitle>
          <LinkItem href="#">GitBook</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>By NFT people, for NFT people</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="#">
            <FaTwitter size="3rem" />
          </SocialIcons>
          <SocialIcons href="#">
            <FaDiscord size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
