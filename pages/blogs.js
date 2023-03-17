import React from "react";
import Link from "next/link";

const Blog = () => {
  return (
    <div>
      <h2 className="text-center font-bold text-4xl my-10">Blogs</h2>
      <Link href={`/blog-post/learn-javascript`}>
        <div className="mt-5  bg-[#f9f9f9] p-7 rounded-md">
          <h3 className="text-xl font-bold mb-2">
            How to learn JavaScript in 2023?
          </h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
      </Link>
      <Link href={`/blog-post/learn-react`}>
        <div className="my-5  bg-[#f9f9f9] p-7 rounded-md">
          <h3 className="text-xl font-bold mb-2">
            How to learn ReactJs in 2023?
          </h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
      </Link>
      <Link href={`/blog-post/learn-mui`}>
        <div className="mb-5  bg-[#f9f9f9] p-7 rounded-md">
          <h3 className="text-xl font-bold mb-2">
            How to learn Material UI in 2023?
          </h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
