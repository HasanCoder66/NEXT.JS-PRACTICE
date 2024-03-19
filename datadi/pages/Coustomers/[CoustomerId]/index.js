// import { Divider } from "antd";
import { useRouter } from "next/router";
export default function () {
  const Router = useRouter();
  const { CoustomerId } = Router.query;
  console.log(CoustomerId);
  return (
    <div>
      <h2>Coustomers {CoustomerId}'s Details Page</h2>
      {/* <h2>Coustomers Projects</h2> */}
      <a>Go to this Coustomer Projects</a>
    </div>
  );
}
