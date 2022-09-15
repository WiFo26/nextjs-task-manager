import {Html, Head, Main, NextScript} from "next/document";

export default function Document(){
  return(
    <Html>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@400;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css" />
      </Head>
      <body>
        <Main />
        <NextScript/>
      </body>
    </Html>
  )
}