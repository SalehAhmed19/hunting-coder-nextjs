import { useRouter } from "next/router";
import React from "react";

// step 1: find the file corresponding to the slug
// step  2: populate them inside the page

const Blog = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <main>
      <h1 className="text-2xl font-bold">{slug}</h1>
      <hr className="my-5" />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
        nostrum cupiditate et, quis optio sed odit culpa nulla necessitatibus
        exercitationem at nemo, placeat accusamus veniam vitae mollitia.
        Delectus, laboriosam sunt.
      </p>
    </main>
  );
};

export default Blog;
