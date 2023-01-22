const UserCard = ({ user, setAddUser, setEdit, setEditValue, temp, setPagData }) => {
  const handleEdit = (user) => {
    setAddUser(true);
    setEdit(true);
    setEditValue(user);
  };

  const handleDelete = async (user) => {
    const res = await window.fetch(
      `https://gorest.co.in/public/v1/users/${user.id}`,
      {
        method: 'DELETE',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            'Bearer baab25ae311ca6c3737a36fc87d76b24da71f067d290a965dea6eb07cd04b6de',
        },
      }
    );

    console.log(res);

    const arr = temp;
    const index = arr.findIndex((item) => item.name == user.name);
    arr.splice(index, 1);

    const dummy = [];
    let numDummy = 1;
    for (let i = 0; i < arr.length; i += 20) {
      dummy.push(arr.slice(i, 20 * numDummy));
      numDummy++;
    }
    setPagData([...dummy]);
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
          onClick={() => handleEdit(user)}
          className="rounded-xl p-3 mx-3 bg-yellow-200 hover:bg-yellow-300"
        >
          Edit
        </button>
        <button
          onClick={() => handleDelete(user)}
          className="rounded-xl p-3 mx-3 bg-red-200 hover:bg-red-300"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default UserCard;
