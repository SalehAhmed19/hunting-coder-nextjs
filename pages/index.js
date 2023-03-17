import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <nav className="p-8 bg-black text-white">
        <ul className="flex">
          <li className="mx-5">Home</li>
          <li className="mx-5">About</li>
          <li className="mx-5">Blogs</li>
          <li className="mx-5">Contact</li>
        </ul>
      </nav>

      <h1 className="text-center font-bold text-4xl my-6">
        Super Blog website by HuntingCoders
      </h1>

      <div className="my-10 mx-10">
        <h1 className="text-3xl font-bold text-center">Hunting Coder</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo laborum
          beatae odit explicabo assumenda inventore maxime velit eos officiis
          architecto. Aut maiores cupiditate ad quas harum consequuntur ex eaque
          libero!
        </p>
      </div>
      <div className="my-5 mx-10">
        <h1 className="text-3xl font-bold text-center">Hunting Coder</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo laborum
          beatae odit explicabo assumenda inventore maxime velit eos officiis
          architecto. Aut maiores cupiditate ad quas harum consequuntur ex eaque
          libero!
        </p>
      </div>
      <div className="my-5 mx-10">
        <h1 className="text-3xl font-bold text-center">Hunting Coder</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo laborum
          beatae odit explicabo assumenda inventore maxime velit eos officiis
          architecto. Aut maiores cupiditate ad quas harum consequuntur ex eaque
          libero!
        </p>
      </div>
    </>
  );
}
