import { FaBorderAll } from "react-icons/fa";
import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import Hero from "../components/Hero/Hero";

import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";

export default function Landing() {
  return (
    <>
      <Layout>
        <Section grid>
          <div style={{ border: "1px red solid" }}>mint nft</div>
          <div>mint nft</div>
        </Section>
      </Layout>
    </>
  );
}
