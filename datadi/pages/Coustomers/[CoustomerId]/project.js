import { useRouter } from "next/router";

export default function () {
    const Router = useRouter()
    const {CoustomerId} = Router.query
    console.log(CoustomerId)
    return (
      <div>
        <h1>Coustomers {CoustomerId}'s Details Projects list Page</h1>
        {/* <h2>Coustomers Projects</h2> */}
        <ul>
            <li>ABC</li>
            <li>XYZ</li>
        </ul>
      </div>
    );
  }
  