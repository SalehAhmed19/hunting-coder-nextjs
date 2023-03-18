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
    <div className="lg:mx-28 mx-5">
      <h2 className="text-center font-bold text-4xl my-10">Blogs</h2>
      {blogs.map((blog) => (
        <>
          <Link href={`/blog-post/` + blog.slug}>
            <div className="my-5  bg-[#f9f9f9] p-7 rounded-md">
              <h3 className="text-xl font-bold mb-2">{blog.title}</h3>
              <p className="text-[#646464] mb-5">
                <small>/ {blog.date}</small>
              </p>
              <p>{blog.content.slice(0, 140) + "..."}</p>
            </div>
          </Link>
        </>
      ))}
    </div>
  );
};

export default Blog;
