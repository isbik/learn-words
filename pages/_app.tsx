import "../styles/globals.css";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps, router }: AppProps) {
  return <Component {...pageProps} key={router.route} />;
}

export default MyApp;
