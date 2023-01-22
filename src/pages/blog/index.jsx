import BlogCards from '@/components/post/blogCard';
import PostPagination from '../../components/post/postPagination';
import { useState, useEffect } from 'react';

const Blogs = ({ posts }) => {
  const [pagNum, setPagNum] = useState(1);
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    const get = async () => {
      const res = await fetch(
        `https://gorest.co.in/public/v2/posts?page=${pagNum}&per_page=16`
      );
      const posts = await res.json();
      setBlogData(posts);
    };

    get();
  }, [pagNum]);

  return (
    <div className="mt-8">
      <h4 className="text-center">Blog Page</h4>
      <div className="flex flex-col md:flex-row flex-wrap justify-center">
        {blogData.map((post) => (
          <BlogCards key={post.id} post={post} />
        ))}
      </div>
      <PostPagination pagNum={pagNum} setPagNum={setPagNum} />
    </div>
  );
};

export default Blogs;
