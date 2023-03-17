import { useRouter } from "next/router";
import React from "react";

const Blog = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <main>
      <h1 className="text-2xl font-bold">Title of the page: {slug}</h1>
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
