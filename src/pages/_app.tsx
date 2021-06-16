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
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
