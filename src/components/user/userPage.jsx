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
  setEdit,
  setEditValue,
}) => {
  const [permData, setPermData] = useState([]);

  useEffect(() => {
    let dummy = [];
    let numDummy = 1;
    for (let i = 0; i < temp.length; i += 20) {
      dummy.push(temp.slice(i, 20 * numDummy));
      numDummy++;
    }
    setPermData([...dummy]);
  }, []);

  const changeInput = (e) => {
    const value = e.target.value;
    setSearch(value);
  };

  const clickSearch = () => {
    if (search == '') {
      alert('tidak bisa search dalam keadaan kosong');
    } else {
      const userSearch = temp.filter((user) =>
        user.name.toLowerCase().includes(search.toLowerCase())
      );
      setPagData(userSearch);
    }
  };

  const cancelSearch = () => {
    setPagData([...permData]);
  };

  const loop = () => {
    try {
      const b = pagData[pagNum].map((user) => (
        <UserCard
          setEditValue={setEditValue}
          setEdit={setEdit}
          key={user.id}
          user={user}
          setAddUser={setAddUser}
          temp={temp}
          setPagData={setPagData}
        />
      ));
      return b;
    } catch (err) {
      const a = pagData.map((user) => (
        <UserCard
          setEditValue={setEditValue}
          setEdit={setEdit}
          key={user.id}
          user={user}
          setAddUser={setAddUser}
          temp={temp}
          setPagData={setPagData}
        />
      ));
      return a;
    }
  };
  return (
    <div className="my-10 text-center">
      <div>
        <Button
          className="ring-1 ring-gray-600 px-5 text-gray-700 py-2 rounded-xl mx-auto hover:bg-gray-700 hover:text-gray-100 "
          onClick={() => setAddUser(true)}
        >
          Add User
        </Button>
      </div>
      <div className="my-8 w-1/2 p-4 mx-auto">
        <div className="flex w-96 justify-center mx-auto">
          <Input
            className="my-8 p-2 mx-1 w-72"
            variant="standard"
            placeholder="search user.."
            onChange={changeInput}
          />
          <button
            onClick={clickSearch}
            className="my-8 mx-1 w-24 rounded-xl p-2 bg-sky-200 hover:bg-sky-300"
          >
            Search
          </button>
          <button
            onClick={cancelSearch}
            className="my-8 mx-1 w-24 rounded-xl p-2 bg-red-200 hover:bg-red-300"
          >
            cancel
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
