import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";
import { FaDiscord, FaTwitter } from "react-icons/fa";

import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

<nav className="border-b p-6">
  <p className="text-4xl font-bold">Open Ocean</p>
  <div className="flex mt-4">
    <Link href="/">
      <a className="mr-4 text-pink-500">Home</a>
    </Link>
    <Link href="/create-item">
      <a className="mr-6 text-pink-500">Sell Digital Asset</a>
    </Link>
    <Link href="/my-assets">
      <a className="mr-6 text-pink-500">My Digital Assets</a>
    </Link>
    <Link href="/creator-dashboard">
      <a className="mr-6 text-pink-500">Creator Dashboard</a>
    </Link>
  </div>
</nav>;

const Header = () => (
  <Container>
    <Div1>
      <Link href="/landing">
        <a style={{ display: "flex", alignItems: "center", color: "white" }}>
          <DiCssdeck size="3rem" /> <span>Open Ocean</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="/">
          <NavLink>Home </NavLink>
        </Link>
      </li>
      <li>
        <Link href="/create-item">
          <NavLink>Create</NavLink>
        </Link>
      </li>
      <li>
        <Link href="/my-assets">
          <NavLink>Wallet</NavLink>
        </Link>
      </li>
      <li>
        <Link href="/creator-dashboard">
          <NavLink>Creator dashboard</NavLink>
        </Link>
      </li>
    </Div2>
    {/* <Div3>
      <SocialIcons href="https://google.com">
        <FaDiscord size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://google.com">
        <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://google.com">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
    </Div3> */}
  </Container>
);

export default Header;
