import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

// step 1: find the file corresponding to the slug
// step  2: populate them inside the page

const Blog = () => {
  const router = useRouter();
  const { slug } = router.query;
  const [blog, setBlog] = useState({});
  useEffect(() => {
    fetch(`http://localhost:3001/api/getblogs?slug=` + slug).then((res) =>
      res.json().then((data) => setBlog(data))
    );
  }, []);
  return (
    <main>
      <h1 className="text-2xl font-bold">{blog.title}</h1>
      <div className="flex justify-between text-[#646464]">
        <h4>
          <small>
            <span className="font-bold">Author:</span> {blog.author}
          </small>
        </h4>
        <h4>
          <small>
            <span className="font-bold">Time:</span> {blog.date}
          </small>
        </h4>
      </div>
      <hr className="my-5" />
      <p>{blog.content}</p>
    </main>
  );
};

export default Blog;
