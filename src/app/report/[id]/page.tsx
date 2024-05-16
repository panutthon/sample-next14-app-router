"use client";

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
    <div>
      <p>Report id: {params.id}</p>
      <p>Query search : {query.get("search")}</p>
      <p>Query cat : {query.get("cat")}</p>
    </div>
  );
}

export default Report;
