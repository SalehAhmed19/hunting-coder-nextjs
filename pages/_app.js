import "@/styles/globals.css";
import { Poppins } from "next/font/google";
const poppins = Poppins({
  weight: ["900", "800", "700", "600", "500", "400", "300", "200", "100"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${poppins.style.fontFamily};
        }
      `}</style>
      <Component {...pageProps} />
    </>
  );
}
