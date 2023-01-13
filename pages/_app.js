import "../styles/globals.css";
import "./main.css";
import "../components/modal.css";
import Head from "next/head";

const App = ({ Component, pageProps }) => {
  return (
    <main>
      <Head>
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <meta property="og:image" content="/images/wegeda_og.jpg" />
        <meta property="og:url" content="https://wegeda.app" />
        <meta property="og:title" content="Wegeda" />
        <meta
          property="og:description"
          content="Find rooms and verified roommates across Nigeria."
        />
        <meta
          name="description"
          content="Find rooms and verified roommates across Nigeria."
        />

        <meta
          name="keywords"
          content="Rent, Roommates, Rent anywhere in lagos, find verified roommate, cheap houses, cheap rent"
        ></meta>

        <meta property="og:type" content="website" />
        <title>Wegeda </title>
      </Head>
      <Component {...pageProps} />
    </main>
  );
};

export default App;
