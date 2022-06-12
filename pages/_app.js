import "../styles/index.css";
import Layout from "../components/Layout";
import '../styles/CheckoutForm.scss'

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
