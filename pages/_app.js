import { Fragment } from "react";
import Head from "next/head";
import "./global.css";
import StoreProvider from "../store/StoreProvider";
import FrameComponent from "../components/frame-component";
function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <StoreProvider>
      <Head>
        <title>maha</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <Component {...pageProps} />
      </StoreProvider>
    </Fragment>
  );
}

export default MyApp;
