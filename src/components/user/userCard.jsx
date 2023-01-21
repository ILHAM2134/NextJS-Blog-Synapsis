const UserCard = ({ user }) => {
  const handleEdit = (id) => {
    alert(`edit ${id}`);
  };

  const handleDelete = (id) => {
    alert(`delete ${id}`);
  };

  return (
    <div
      key={user.id}
      className="my-10 bg-gray-100 hover:bg-gray-200 p-5 rounded-xl w-96 mx-auto md:mx-4"
    >
      <h6 className="my-3">{user.name}</h6>
      <p className="my-3">{user.email}</p>
      <div className="flex justify-center my-3 flex-end">
        <button
          onClick={() => handleEdit(user.id)}
          className="rounded-xl p-3 mx-3 bg-yellow-200 hover:bg-yellow-300"
        >
          Edit
        </button>
        <button
          onClick={() => handleDelete(user.id)}
          className="rounded-xl p-3 mx-3 bg-red-200 hover:bg-red-300"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;
