import Link from "next/link";

export const Nav = () => {
  return (
    <nav className="flex flex-col items-center border-r border-neutral-gray">
      <Link href="/">Home</Link>
      <Link href="/page1">Page1</Link>
    </nav>
  );
};

export default Nav;
