import React from "react";

import { NextPage } from "next";
import { classnames } from "tailwindcss-classnames";

import { Button } from "../components/Button";

const Page: NextPage = () => {
  return (
    <main className={classnames("container")}>
      <Button>button</Button>
    </main>
  );
};

export default Page;
