"use client";

import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import React from "react";

type Props = {
  params: {
    id: string;
  };
};

function Report({}: Props) {
  const params = useParams(); // อ่านค่า parameter จาก URL

  // อ่านค่า query จาก URL
  const query = useSearchParams(); // get query from URL
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="flex flex-col space-y-4 w-96 text-start">
        <Link href="/">&larr; Home</Link>
        <p>Report id: {params.id}</p>
        <p>Query search : {query.get("search")}</p>
        <p>Query cat : {query.get("cat")}</p>
      </div>
    </div>
  );
}

export default Report;
