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
      <div className="mx-2 my-5">
        <h6>{detailBlog.title}</h6>
        <p>{detailBlog.body}</p>
      </div>
      <div className="mx-2 my-5">
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

// export async function getServerSideProps({ req, res }) {
//   const query = req.query;
//   const resp = await fetch(`https://gorest.co.in/public/v2/posts/457/comments`);
//   const response = await resp.json();

//   return {
//     props: {
//       query,
//       response,
//     },
//   };
// }
