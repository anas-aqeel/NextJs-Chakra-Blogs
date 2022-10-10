import Navbar from "../components/Navbar.jsx";
import { ChakraProvider } from "@chakra-ui/react";

import "../styles/globals.css";
import Footer from "../components/Footer.jsx";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ChakraProvider>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
