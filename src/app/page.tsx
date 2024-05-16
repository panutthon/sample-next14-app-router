import Link from "next/link";
import React from "react";

type Props = {};

const Home = (props: Props) => {
  return (
    <main className="flex min-h-screen items-center justify-center">
      <ul className="flex flex-col space-y-4 w-96 text-start">
        <li>
          <Link href="/about">About &rarr;</Link>
        </li>
        <li>
          <Link href="/service">Service &rarr;</Link>
        </li>
        <li>
          <Link href="/contact">Contact &rarr;</Link>
        </li>
        <li>
          <Link href="/report/1">Report &rarr;</Link>
        </li>
      </ul>
    </main>http://localhost:3000/service
  );
};

export default Home;
