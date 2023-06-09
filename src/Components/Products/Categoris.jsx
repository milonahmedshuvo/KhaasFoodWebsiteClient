import React from "react";
import { useLoaderData } from "react-router-dom";

const Categoris = () => {
  const datas = useLoaderData();

  console.log(datas);

  return (
    <div>
      <h1>Categoris food </h1>
    </div>
  );
};

export default Categoris;
