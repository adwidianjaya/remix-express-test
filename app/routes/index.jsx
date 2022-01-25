import { Link, useLoaderData } from "remix";
import { getPosts } from "../post";

export const loader = () => {
  return getPosts();
};

export function meta() {
  return { title: "New Remix App" };
}

export default function Index() {
  const posts = useLoaderData();
  // console.log(posts);

  return (
    <div className="container max-w-sm mx-auto">
      <h1 className="text-3xl font-bold underline text-red-500">
        Hello world!
      </h1>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={`/posts/${post.slug}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
