import React from "react";

import { NextPage } from "next";
import { AppProps } from "next/app";
import Head from "next/head";

import "../styles/globals.css";

const App: NextPage<AppProps> = (props) => {
  const { Component, pageProps } = props;

  return (
    <>
      <Head>
        <title>Cloth Price Calculator</title>
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@700&amp;display=swap&amp;text=ClothPriceaul"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
