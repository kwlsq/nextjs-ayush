import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="absolute flex justify-between w-[90%] p-8">
      <p className="font-normal hover:cursor-pointer">
        <Link href="/">@Ayush Barnwal</Link>
      </p>
      <div className="flex justify-between gap-12">
        <p className="font-normal hover:cursor-pointer">
          <Link href="/">About</Link>
        </p>
        <p className="font-normal hover:cursor-pointer">Work</p>
        <p className="font-normal hover:cursor-pointer">
          <Link href="/contact">Contact</Link>
        </p>
      </div>
    </nav>
  );
};

export default Navbar;
