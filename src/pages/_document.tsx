import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
   return (
      <Html
         lang="fa"
         dir="rtl"
      >
         <Head />
         <body className="antialiased">
            <Main />
            <NextScript />
         </body>
      </Html>
   );
}
