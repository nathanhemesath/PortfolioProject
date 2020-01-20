import Document, { Head, Main, NextScript } from "next/document";

export default class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta name="description" content="A site for my programming portfolio" />
          <meta charSet="utf-8" />
          <meta name="robots" content="noindex, nofollow" />
          <meta name="viewport" content="width=device-width" />
          <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css" />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto" />
        </Head>

        <body>
          <Main />
          <NextScript />
        </body>

        <style global jsx>{`
          body {
            background: #f0f0f0;
            font-family: "Roboto", sans-serif;
            font-size: 110%;
            margin: 0;
          }
        `}</style>

        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" 
        integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>


      </html>
    );
  }
}
