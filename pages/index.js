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
      <main>
        <h1 className="text-3xl font-bold">Hunting Coder</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo laborum
          beatae odit explicabo assumenda inventore maxime velit eos officiis
          architecto. Aut maiores cupiditate ad quas harum consequuntur ex eaque
          libero!
        </p>
      </main>
    </>
  );
}
