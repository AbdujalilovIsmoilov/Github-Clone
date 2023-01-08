import { useEffect, useState, useContext } from "react";
import { Context } from "../../UI/context/Context";

const RepoItem = () => {
  const { apiValue } = useContext(Context);

  const api = async () => {
    const request = await fetch(`https://api.github.com/users/${apiValue}`);
    const result = await request.json();
    console.log(result);
  };

  useEffect(() => {
    api();
  }, [apiValue]);

  return (
    <>
      <h1>RepoItem</h1>
    </>
  );
};

export default RepoItem;
