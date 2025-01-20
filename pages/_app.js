import { Fragment } from "react";
import Head from "next/head";
import "./global.css";
import StoreProvider from "../store/StoreProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

import FrameComponent from "../components/frame-component";
function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <ToastContainer
                position="top-right"
                autoClose={3500}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss={false}
                draggable
                pauseOnHover={false}
                theme="light"
              />
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
