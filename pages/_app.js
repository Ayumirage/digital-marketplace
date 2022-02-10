/* pages/_app.js */
import "../styles/globals.css";
import Link from "next/link";
import Theme from "../styles/theme";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Theme>
        <Component {...pageProps} />
      </Theme>
    </>
  );
}

export default MyApp;
