import Link from "next/link";
import React from "react";

type Props = {};

function About({}: Props) {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col space-y-4 w-96 text-start">
        <Link href="/">&larr; Home</Link>
        <h1 className="text-4xl">About</h1>
        <p> This is the about page </p>
        <p className="my-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur
          repudiandae sequi et magni molestias officiis possimus commodi, unde
          quibusdam. Eos veritatis cumque, minima culpa porro quo maxime velit.
          Exercitationem, porro!
        </p>
      </div>
    </div>
  );
}

export default About;
