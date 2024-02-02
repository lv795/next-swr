import Link from 'next/link';

function Nav() {
  return (
      <ul className="h-14 bg-black text-white flex gap-2 justify-center w-full items-center">
        <li>
          <Link href="/home">Home</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
  );
}

export default Nav;
