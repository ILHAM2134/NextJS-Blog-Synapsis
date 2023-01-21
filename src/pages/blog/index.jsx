import BlogCards from '@/components/post/blogCard';

const Blogs = ({ posts }) => {
  return (
    <>
      <div>Blog</div>
      <div className="flex flex-col md:flex-row flex-wrap justify-center">
        {posts.map((post) => (
          <BlogCards key={post.id} post={post} />
        ))}
      </div>
    </>
  );
};

export default Blogs;

export async function getStaticProps() {
  const res = await fetch(
    'https://gorest.co.in/public/v2/posts?page=1&per_page=100'
  );
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
}
