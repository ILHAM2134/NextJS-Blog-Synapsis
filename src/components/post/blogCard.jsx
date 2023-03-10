import { useRouter } from 'next/router';

const BlogCards = ({ post }) => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push(`/blog/${post.id}`)}
      className="cursor-pointer my-2 md:my-10 w-10/12 md:w-1/3 mx-auto md:mx-5 bg-gray-100 hover:bg-gray-200 p-5 rounded-2xl"
    >
      <h6 className="my-3 font-bold">
        {post.title.length > 100
          ? post.title.substring(0, 100) + '...'
          : post.title}
      </h6>
      <p className="my-3">
        {post.body.length > 170
          ? post.body.substring(0, 170) + '...'
          : post.body}
      </p>
    </div>
  );
};

export default BlogCards;
