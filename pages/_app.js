import "@/styles/globals.css";
import { Poppins } from "next/font/google";
import Link from "next/link";
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
      <nav className="p-8 bg-black text-white">
        <ul className="flex">
          <Link href="/" className="mx-5">
            <li>Home</li>
          </Link>
          <Link href="/about" className="mx-5">
            <li>About</li>
          </Link>
          <Link href="/blogs" className="mx-5">
            <li>Blogs</li>
          </Link>
          <Link href="/contact" className="mx-5">
            <li>Contact</li>
          </Link>
        </ul>
      </nav>
      <Component {...pageProps} />
    </>
  );
}
