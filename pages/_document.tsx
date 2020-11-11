import Document, { Html, Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* <title>Simple Blog</title> */}
          <meta
            name="keywords"
            content="blog,simple blog,test assessment,front-end test assessment,DevelopsToday"
          />
          <meta
            name="description"
            content="this is front-end test assessment by DevelopsToday"
          />
          <meta charSet="utf-8" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
            rel="stylesheet"
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
