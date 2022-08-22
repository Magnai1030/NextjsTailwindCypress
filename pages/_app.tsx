import "../styles/globals.css";
import type { AppProps } from "next/app";
import { CursorProvider } from "provider";
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AnimatePresence>
      <CursorProvider>
        <Component {...pageProps} />
      </CursorProvider>
    </AnimatePresence>
  );
}

export default MyApp;
