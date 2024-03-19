import React from "react";
import { useRouter } from "next/router";

const DynamicRoute = () => {
  const Router = useRouter();
  // console.log(Router.pathname);
  const { username } = Router.query;
  console.log(Router.query);
  return <div> {username} Profile page</div>;
};

export default DynamicRoute;
