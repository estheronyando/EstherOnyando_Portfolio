import PropTypes from 'prop-types';
// provider
import { ScrollProvider } from '../context/ScrollContext';
// style
import '../styles/globals.css';
//import favicon from "../../public/favicon.ico"
//import { Html, Head, Main, NextScript } from 'next/document'

export default function MyApp({ Component, pageProps }) {
  return (
    <ScrollProvider>
      {/* <Head>
          <link rel="shortcut icon" href={favicon} />
        </Head> */}
      
      <Component {...pageProps} />
    </ScrollProvider>
  );
}

// ---------------------------------------

MyApp.propTypes = {
  Component: PropTypes.elementType,
  pageProps: PropTypes.object,
  emotionCache: PropTypes.object,
};