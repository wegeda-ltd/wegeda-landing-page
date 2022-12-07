import "../styles/globals.css";
import "./main.css";
import "../components/modal.css";

const App = ({ Component, pageProps }) => {
  return (
    <main>
      <Component {...pageProps} />
    </main>
  );
};

export default App;
