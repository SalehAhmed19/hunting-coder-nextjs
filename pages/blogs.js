import React, { useEffect, useState } from "react";
import Link from "next/link";

// step 1: collect all data from blogData directory
// step 2: iterate through them and display them

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // fetch("http://localhost:3000/api/blogs")
    //   .then((a) => {
    //     return a.json();
    //   })
    //   .then((parsed) => {
    //     setBlogs(parsed);
    //     console.log(parsed);
    //   });
    fetch("http://localhost:3000/api/blogs")
      .then((res) => res.json())
      .then((data) => {
        setBlogs(data);
        console.log(data);
      });
  }, []);

  return (
    <div>
      <h2 className="text-center font-bold text-4xl my-10">Blogs</h2>

      {blogs.map((blog) => {
        console.log(blog);
        <p key={blog.title}>{blog.title}</p>;
      })}

      {/* <Link href={`/blog-post/React`}>
        <div className="my-5  bg-[#f9f9f9] p-7 rounded-md">
          <h3 className="text-xl font-bold mb-2">About React Js</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
      </Link>
      <Link href={`/blog-post/Mui`}>
        <div className="mb-5  bg-[#f9f9f9] p-7 rounded-md">
          <h3 className="text-xl font-bold mb-2">About Material UI</h3>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
        </div>
      </Link> */}
    </div>
  );
};

export default Blog;
