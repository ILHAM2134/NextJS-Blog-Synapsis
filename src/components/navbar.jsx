import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="bg-slate-200 p-8 flex justify-center sticky top-0 z-50">
      <Link className="mx-7 sm:mx-11" href="/">
        <h6 className="font-medium hover:font-black">Home</h6>
      </Link>
      <Link className="mx-7 sm:mx-11" href="/blog">
        <h6 className="font-medium hover:font-black">Blog</h6>
      </Link>
      <Link className="mx-7 sm:mx-11" href="/user">
        <h6 className="font-medium hover:font-black">User</h6>
      </Link>
    </div>
  );
};

export default Navbar;
