import { ErrorMessage, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';
import { Button } from '@material-tailwind/react';

const AddUserPage = ({ setAddUser, pagData, setPagData }) => {
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

    if (pagData[0].length >= 20) {
      pagData.push([data]);
    } else {
      pagData[0].push(data);
    }

    setPagData([...pagData]);

    console.log(pagData);
    console.log(res);

    setAddUser(false);
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

export default AddUserPage;
