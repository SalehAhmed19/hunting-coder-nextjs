import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hunting Coder</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="w-11/12 mx-auto">
        <h1 className="text-center font-bold text-4xl my-10">
          Super Blog website by HuntingCoders
        </h1>
        <Image
          src="/coder.jpg"
          className="rounded-md mb-5 mx-auto"
          alt="coder"
          width={237}
          height={158}
        />
        <h2 className="text-2xl font-bold mt-10">Popular Blogs: </h2>

        <div className="mt-5 bg-[#f9f9f9] p-7 rounded-md">
          <h3 className="text-xl font-bold mb-2">
            How to learn JavaScript in 2023?
          </h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
        <div className="my-5 bg-[#f9f9f9] p-7 rounded-md">
          <h3 className="text-xl font-bold mb-2">
            How to learn ReactJs in 2023?
          </h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
        <div className="mb-5 bg-[#f9f9f9] p-7 rounded-md">
          <h3 className="text-xl font-bold mb-2">
            How to learn Material UI in 2023?
          </h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
      </main>
    </>
  );
}
