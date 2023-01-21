const { default: Link } = require('next/link');

const Navbar = () => {
  return (
    <div className="bg-slate-200 p-8 flex justify-center sticky top-0 z-50">
      <Link className="mx-7" href="/">
        Home
      </Link>
      <Link className="mx-7" href="/blog">
        Blog
      </Link>
      <Link className="mx-7" href="/user">
        User
      </Link>
    </div>
  );
};

export default Navbar;
