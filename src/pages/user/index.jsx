import UserCard from '@/components/user/userCard';
import { Button, Input } from '@material-tailwind/react';
import { useEffect, useState } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import Pagination from '@/components/pagination';

const User = ({ usersData, paginationData }) => {
  const permanentData = usersData;
  const [fetch, setFetch] = useState(true);
  const [user, setUser] = useState([]);
  const [search, setSearch] = useState('');
  const [addUser, setAddUser] = useState(false);

  const pagNumber = Math.ceil(usersData.length / 20);

  const changeInput = (e) => {
    const value = e.target.value;
    setSearch(value);
    if (search.length <= 1) {
      setFetch(true);
    } else {
      setFetch(false);
    }
    const userSearch = user.filter((user) => {
      return user.name.toLowerCase().includes(search.toLowerCase());
    });

    setUser(userSearch);
  };

  useEffect(() => {
    if (fetch) {
      setUser(usersData);
    }
  }, [user]);

  const userPage = () => {
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
        <div className="my-8 w-72 mx-auto">
          <Input
            className="my-8 p-2 w-full"
            variant="standard"
            placeholder="search user.."
            onChange={changeInput}
          />
          <p>{search ? `you search : ${search}` : ''}</p>
        </div>
        <div className="flex flex-col md:flex-row flex-wrap justify-center">
          {user.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      </div>
    );
  };

  const addUserPage = () => {
    const initialValues = {
      name: '',
      email: '',
      gender: '',
      status: '',
    };
    const onSubmit = async (data) => {
      const res = await window.fetch('https://gorest.co.in/public/v1/users', {
        method: 'POST',
        credentials: 'same-origin',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            'Bearer baab25ae311ca6c3737a36fc87d76b24da71f067d290a965dea6eb07cd04b6de',
        },
        body: JSON.stringify(data),
      });

      console.log(res);
    };
    const validationSchema = Yup.object().shape({
      name: Yup.string().min(3).max(75).required('name is required field'),
      email: Yup.string().required('email is required field'),
      gender: Yup.string().required('gender is required field'),
      status: Yup.string().required('status is required field'),
    });

    return (
      <div className="mx-auto text-center my-10">
        <Button
          className="ring-1 ring-gray-600 px-5 py-2 rounded-xl mx-auto hover:bg-gray-300"
          onClick={() => setAddUser(false)}
        >
          Back to User Page
        </Button>

        <Formik
          initialValues={initialValues}
          onSubmit={onSubmit}
          validationSchema={validationSchema}
        >
          <Form className="mx-auto mt-10 flex w-full max-w-xl flex-col p-10 shadow-2xl">
            <ErrorMessage
              className="text-bold mb-5 text-red-600"
              name="name"
              component="span"
            />
            <label>Name :</label>
            <Field
              id="inputProduct"
              name="name"
              placeholder={'input your name...'}
              autoComplete="on"
              className="m-1 mx-auto mb-5 w-4/5 rounded-2xl border-[1px] border-blue-400 px-2 py-3 text-black"
            />

            <ErrorMessage
              className="text-bold mb-5 text-red-600"
              name="email"
              component="span"
            />
            <label>Email : </label>
            <Field
              id="inputDescription"
              name="email"
              placeholder={'input your email...'}
              autoComplete="on"
              className="m-1 mx-auto mb-5 w-4/5 rounded-2xl border-[1px] border-blue-400 px-2 py-3 text-black"
            />

            <ErrorMessage
              className="text-bold mb-5 text-red-600"
              name="gender"
              component="span"
            />
            <label>Gender : </label>
            <Field
              id="inputProduct"
              name="gender"
              placeholder={'input your gender..'}
              autoComplete="on"
              className="m-1 mx-auto mb-5 w-4/5 rounded-2xl border-[1px] border-blue-400 px-2 py-3 text-black"
            />

            <ErrorMessage
              className="text-bold mb-5 text-red-600"
              name="status"
              component="span"
            />
            <label>Status : </label>
            <Field
              id="inputPlace"
              name="status"
              placeholder={'input your status..'}
              autoComplete="on"
              className="m-1 mx-auto mb-5 w-4/5 rounded-2xl border-[1px] border-blue-400 px-2 py-3 text-black"
            />

            <hr className="mx-auto my-5 w-4/5 bg-black" />

            <Button
              className="m-1 mx-auto mb-5 mt-5 w-4/5 rounded-2xl border-[1px] bg-blue-400 px-2 py-3 text-black"
              type="submit"
            >
              {/* {edit ? 'Edit Product' : 'Add Product'} */}
              Add Product
            </Button>
          </Form>
        </Formik>
      </div>
    );
  };

  return (
    <div>
      {addUser ? addUserPage() : userPage()}
      <Pagination pag={pagNumber} setUser={setUser} setFetch={setFetch} />;
    </div>
  );
};

export default User;

export async function getStaticProps() {
  const res = await fetch(
    'https://gorest.co.in/public/v1/users?page=1&per_page=100'
  );
  const response = await res.json();
  const paginationData = response.meta.pagination;
  const usersData = response.data;

  return {
    props: {
      usersData,
      paginationData,
    },
  };
}
