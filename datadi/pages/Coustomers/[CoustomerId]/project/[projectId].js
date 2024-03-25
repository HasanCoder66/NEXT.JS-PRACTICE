import { useRouter } from "next/router";

export default function () {
    const Router = useRouter()
    const {CoustomerId , projectId} = Router.query
    console.log(CoustomerId)
    return (
      <div>
        <h1>Coustomers {CoustomerId}'s Details Projects {projectId} Page</h1>
        <h2> Projects {projectId}</h2>
        {/* <ul>
            <li>ABC</li>
            <li>XYZ</li>
        </ul> */}
      </div>
    );
  }
  