import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="flex flex-col gap-4 mt-12 justify-center items-center text-3xl font-semibold">
      <h1>Thanks for your buy</h1>
      <Link href="/">
        <span className="outline">Back to home </span>
      </Link>
    </div>
  );
};

export default page;
