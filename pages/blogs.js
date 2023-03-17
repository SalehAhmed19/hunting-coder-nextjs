import React from "react";
import Link from "next/link";

// step 1: collect all data from blogData directory
// step 2: iterate through them and display them

const Blog = () => {
  return (
    <div>
      <h2 className="text-center font-bold text-4xl my-10">Blogs</h2>
      <Link href={`/blog-post/javascript`}>
        <div className="mt-5  bg-[#f9f9f9] p-7 rounded-md">
          <h3 className="text-xl font-bold mb-2">About JavaScript</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
      </Link>
      <Link href={`/blog-post/react`}>
        <div className="my-5  bg-[#f9f9f9] p-7 rounded-md">
          <h3 className="text-xl font-bold mb-2">About React Js</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
      </Link>
      <Link href={`/blog-post/mui`}>
        <div className="mb-5  bg-[#f9f9f9] p-7 rounded-md">
          <h3 className="text-xl font-bold mb-2">About Material UI</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
