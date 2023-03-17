import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import "@/styles/globals.css";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  weight: ["900", "800", "700", "600", "500", "400", "300", "200", "100"],
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <div className="flex flex-col min-h-screen">
      <style jsx global>{`
        html {
          font-family: ${poppins.style.fontFamily};
        }
      `}</style>
      <Navbar />
      <div className="lg:mx-20 mx-5 py-10">
        <Component {...pageProps} />
      </div>
      <Footer />
    </div>
  );
}
