import React from "react";

import Document, {
  DocumentInitialProps,
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { classnames } from "tailwindcss-classnames";

import { GA_TRACKING_ID } from "../libs/gtag";

class BaseDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render(): JSX.Element {
    return (
      <Html
        lang="ja"
        className={classnames(
          "bg-gradient-to-r",
          "from-pink-300",
          "to-yellow-200"
        )}
      >
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Nunito:wght@700&amp;display=swap&amp;text=ClothPriceaul"
          />

          {!!GA_TRACKING_ID && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${GA_TRACKING_ID}', {
                    page_path: window.location.pathname,
                  });`,
                }}
              />
            </>
          )}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default BaseDocument;
