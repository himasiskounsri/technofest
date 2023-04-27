import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en" style={{ scrollBehavior: "smooth", overflowX: "hidden" }}>
      <Head />
      <body style={{ overflowX: "hidden" }}>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
