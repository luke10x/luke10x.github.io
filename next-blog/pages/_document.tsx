import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const color = process.env.NODE_ENV === 'development'
    ? 'ffddff'
    : 'ff33ff';

  return (
    <Html lang="en">
      <Head>
        <link rel="shortcut icon" 
        type="image/svg+xml" 
        href={`data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' 
          viewBox='0 0 100 100'
          %3E%3Ccircle 
          cx='50' cy='50' r='50' fill='%23${color}' /%3E%3C/svg%3E`} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
