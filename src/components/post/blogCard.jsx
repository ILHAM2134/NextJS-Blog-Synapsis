const BlogCards = ({ post }) => {
  const blogDetail = (id) => {
    alert(id);
  };

  return (
    <div
      onClick={() => blogDetail(post.id)}
      className="my-6 md:my-10 w-10/12 md:w-1/3 mx-auto md:mx-5 bg-gray-100 hover:bg-gray-200 p-5 rounded-2xl"
    >
      <h4 className="my-3">{post.title}</h4>
      <p className="my-3">{post.body}</p>
      <div className="flex justify-center my-3 flex-end">
        <button className="rounded-xl p-3 mx-3 bg-yellow-200 hover:bg-yellow-300">
          Edit
        </button>
        <button className="rounded-xl p-3 mx-3 bg-red-200 hover:bg-red-300">
          Delete
        </button>
      </div>
    </div>
  );
};

export default BlogCards;
