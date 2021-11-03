import Head from "next/head";
import "../styles/globals.css";

const MyApp = ({ Component, pageProps }) => {
  const OpenGraphImage = "https://res.cloudinary.com/diegomurillo/image/upload/v1635924497/devbook-web.vercel.app/og-image-devbook_uejrpr.png";
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Righteous&display=swap" rel="stylesheet" />
        {/* Primary Meta Tags */}
        <title>DevBook</title>
        <meta charSet="UTF-8" />
        <meta name="theme-color" content="#000000" />
        <meta name="title" content="DevBook" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description" content="Somos una plataforma educativa Salvadoreña formada por estudiantes de la Escuela Especializada en Ingeniería ITCA FEPADE, con solidos y amplios conocimientos en diseño, programación y soporte tecnico." />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://devbook-web.vercel.app" />
        <meta property="og:title" content="DevBook" />
        <meta property="og:description" content="Somos una plataforma educativa Salvadoreña formada por estudiantes de la Escuela Especializada en Ingeniería ITCA FEPADE, con solidos y amplios conocimientos en diseño, programación y soporte tecnico." />
        <meta property="og:image" content={OpenGraphImage} />
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://devbook-web.vercel.app" />
        <meta property="twitter:title" content="DevBook" />
        <meta property="twitter:description" content="Somos una plataforma educativa Salvadoreña formada por estudiantes de la Escuela Especializada en Ingeniería ITCA FEPADE, con solidos y amplios conocimientos en diseño, programación y soporte tecnico." />
        <meta property="twitter:image" content={OpenGraphImage} />
      </Head>
      <Component {...pageProps} />
    </>
  );
};

export default MyApp;