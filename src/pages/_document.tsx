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
