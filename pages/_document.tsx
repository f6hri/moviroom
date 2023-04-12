import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="tr">
      <Head>
          <link rel="manifest" href="/manifest.json" />
          <link rel="apple-touch-icon" href="/icon_192.png"></link>
          <meta name="theme-color" content="#131313" />
          <link rel="shortcut icon" href="/icon_192.png" type="image/png" />
        </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
