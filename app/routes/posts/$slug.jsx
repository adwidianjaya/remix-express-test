import { useLoaderData } from "remix";
import { getPostBySlug } from "~/post";

export const loader = async ({ params }) => {
  return getPostBySlug(params.slug);
};

export const meta = ({ data }) => {
  // console.log("meta", data);
  return { title: data?.title };
};

export default function PostSlug() {
  const post = useLoaderData();
  // console.log({ post });

  return (
    <div className="container max-w-sm mx-auto">
      <h1 className="font-bold">{post?.title}</h1>
      <p>{post?.slug}</p>
    </div>
  );
}
