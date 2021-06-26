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
        <meta
          name="description"
          content="生地のサイズから原価を計算するアプリ。"
        />
        <meta name="theme-color" content="#f9a8d4" />
        <link rel="manifest" href="/manifest.webmanifest" />
        <link rel="apple-touch-icon" href="/icon-192x192.png" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default App;
