import "@/styles/globals.css";
import SWRProvider from "@/provider/SWRProvider";

export default function App({ Component, pageProps }) {
  return (
    <SWRProvider>
      <Component {...pageProps} />
    </SWRProvider>
  );
}
