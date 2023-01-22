import { useEffect, useState } from 'react';
import Pagination from '@/components/pagination';
import UserPage from '@/components/user/userPage';
import AddUserPage from '@/components/user/addUserPage';

const User = ({ response }) => {
  const [temp, setTemp] = useState([]);
  const [search, setSearch] = useState('');
  const [addUser, setAddUser] = useState(false);
  const [pagData, setPagData] = useState([]);
  const [pagNum, setPagNum] = useState(0);
  const [edit, setEdit] = useState(false);
  const [editValue, setEditValue] = useState(null);

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
  }, [temp]);

  return (
    <div>
      {addUser ? (
        <AddUserPage
          setAddUser={setAddUser}
          pagData={pagData}
          setPagData={setPagData}
          edit={edit}
          setEdit={setEdit}
          editValue={editValue}
          setEditValue={setEditValue}
          temp={temp}
        />
      ) : (
        <UserPage
          setAddUser={setAddUser}
          search={search}
          setSearch={setSearch}
          pagData={pagData}
          setPagData={setPagData}
          pagNum={pagNum}
          temp={temp}
          setEdit={setEdit}
          setEditValue={setEditValue}
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

// {
//   "id": 457,
//   "user_id": 917,
//   "title": "Volva defendo tenax cilicium amplitudo aspicio odio ustilo.",
//   "body": "Via careo somnus. Adicio vilitas vomer. Architecto labore fugiat. Varius nostrum voluptas. Consequatur appositus attero. Charisma compono bonus. Rerum carcer convoco. Comminor sursum delego. Bellicus aduro coaegresco. Advoco accedo calco. Omnis ademptio nulla. Laudantium pax vultuosus. Conforto neque vorax. Curis accendo aestivus. Substantia vultuosus spiritus."
// }

// [
//   {
//     "id": 450,
//     "post_id": 457,
//     "name": "Vijay Embranthiri",
//     "email": "vijay_embranthiri@von-lemke.com",
//     "body": "Ipsa consequatur quaerat. Sunt quo omnis. Itaque animi sit. Sint voluptas voluptatem."
//   }
// ]