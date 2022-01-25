const posts = [
  {
    slug: "my-first-post",
    title: "My First Post",
  },
  {
    slug: "90s-mixtape",
    title: "A Mixtape I Made Just For You",
  },
];

export const getPosts = () => {
  return posts;
};

export const getPostBySlug = (slug) => {
  return posts.find((p) => p.slug === slug);
};
