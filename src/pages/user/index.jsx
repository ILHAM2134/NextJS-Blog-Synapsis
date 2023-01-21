import { useEffect, useState } from 'react';
import Pagination from '@/components/pagination';
import UserPage from '@/components/user/userPage';
import AddUserPage from '@/components/user/addUserPage';

const User = ({ response }) => {
  const [permData, setPermData] = useState([]);
  const [temp, setTemp] = useState([]);
  const [search, setSearch] = useState('');
  const [addUser, setAddUser] = useState(false);
  const [pagData, setPagData] = useState([]);
  const [pagNum, setPagNum] = useState(0);

  useEffect(() => {
    setTemp(response);
  }, []);

  useEffect(() => {
    let dummy = [];
    let numDummy = 1;
    for (let i = 0; i < temp.length; i += 20) {
      dummy.push(temp.slice(i, 20 * numDummy));
      numDummy++;
    }
    setPagData([...dummy]);
    setPermData([...pagData]);
  }, [temp]);

  return (
    <div>
      {addUser ? (
        <AddUserPage setAddUser={setAddUser} />
      ) : (
        <UserPage
          setAddUser={setAddUser}
          search={search}
          setSearch={setSearch}
          pagData={pagData}
          setPagData={setPagData}
          pagNum={pagNum}
          temp={temp}
          permData={permData}
        />
      )}
      <Pagination pagData={pagData} setPagNum={setPagNum} />;
    </div>
  );
};

export default User;

export async function getStaticProps() {
  const res = await fetch(
    'https://gorest.co.in/public/v2/users?page=1&per_page=100'
  );
  const response = await res.json();

  return {
    props: {
      response,
    },
  };
}
