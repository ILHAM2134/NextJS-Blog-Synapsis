import { Button, Input } from '@material-tailwind/react';
import UserCard from '@/components/user/userCard';
import { useEffect, useState } from 'react';

const UserPage = ({
  setAddUser,
  search,
  setSearch,
  pagData,
  setPagData,
  pagNum,
  temp,
  permData,
}) => {
  const changeInput = (e) => {
    const value = e.target.value;
    setSearch(value);

    if (search.length <= 2) {
      setPagData(permData);
    }
  };

  const clickSearch = () => {
    if (search == '') alert('tidak bisa search dalam keadaan kosong');
    const userSearch = temp.filter((user) =>
      user.name.toLowerCase().includes(search.toLowerCase())
    );
    setPagData(userSearch);
  };

  const loop = () => {
    try {
      const b = pagData[pagNum].map((user) => (
        <UserCard key={user.id} user={user} />
      ));
      return b;
    } catch (err) {
      const a = pagData.map((user) => <UserCard key={user.id} user={user} />);
      return a;
    }
  };
  return (
    <div className="my-10 text-center">
      <div>
        <Button
          className="ring-1 ring-gray-600 px-5 py-2 rounded-xl mx-auto hover:bg-gray-300"
          onClick={() => setAddUser(true)}
        >
          Add User
        </Button>
      </div>
      <div className="my-8 w-96 mx-auto">
        <div className="flex w-full">
          <Input
            className="my-8 p-2 w-60 mx-2"
            variant="standard"
            placeholder="search user.."
            onChange={changeInput}
          />
          <button
            onClick={clickSearch}
            className="my-8 mx-2 w-24 rounded-xl p-2 bg-sky-200 hover:bg-sky-300"
          >
            Search
          </button>
        </div>
        <p>{search ? `you search : ${search}` : ''}</p>
      </div>
      <div className="flex flex-col md:flex-row flex-wrap justify-center">
        {loop()}
      </div>
    </div>
  );
};

export default UserPage;
