import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { createGlobalStyle, ServerStyleSheet } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    -webkit-font-smoothing: antialiased;
    -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: transparent;
    -webkit-tap-highlight-color: transparent;
  }
`;

export default class MyDocument extends Document {
  static getInitialProps = ({ renderPage }) => {
    const sheet = new ServerStyleSheet();
    const page = renderPage((App) => (props) => sheet.collectStyles(<App {...props} />));
    const styleTags = sheet.getStyleElement();
    return { ...page, styleTags };
  };

  render = () => (
    <html lang="ja">
      <Head prefix="og: http://ogp.me/ns#">
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1,shrink-to-fit=no" />
        <meta name="format-detection" content="telephone=no" />
        <link rel="stylesheet" href="/static/bootstrap/css/bootstrap.min.css" />
        <script type="text/javascript" src="/static/jquery/jquery.min.js" />
        <script type="text/javascript" src="/static/bootstrap/js/bootstrap.bundle.min.js" />
        <GlobalStyle />
        {this.props.styleTags}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </html>
  );
}
