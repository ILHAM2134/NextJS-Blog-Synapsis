import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const Post = () => {
  const router = useRouter();

  const [detailBlog, setDetailBlog] = useState({});
  const [commentBlog, setCommentBlog] = useState([]);

  useEffect(() => {
    const data = async () => {
      const { blogDetail } = router.query;
      const det = await fetch(
        `https://gorest.co.in/public/v2/posts/${blogDetail}`
      );
      const detail = await det.json();
      setDetailBlog(detail);

      const com = await fetch(
        `https://gorest.co.in/public/v2/posts/${blogDetail}/comments`
      );
      const comment = await com.json();
      setCommentBlog(comment);
    };

    data();
  }, []);

  console.log(detailBlog);

  console.log(commentBlog);

  return (
    <div className="my-8 flex justify-center p-5">
      <div className="my-6 md:my-10 w-10/12 md:w-1/3 mx-auto md:mx-5 bg-gray-100 hover:bg-gray-200 p-5 rounded-2xl">
        <h6>{detailBlog.title}</h6>
        <p>{detailBlog.body}</p>
      </div>
      <div className="my-6 md:my-10 w-10/12 md:w-1/3 mx-auto md:mx-5 bg-gray-100 hover:bg-gray-200 p-5 rounded-2xl">
        {commentBlog.map((comment) => (
          <div key={comment.id}>
            <h6>{comment.name}</h6>
            <p>{comment.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Post;
