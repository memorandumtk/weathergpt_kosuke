import { headers } from "next/headers";
import { getWeatherData } from "./lib/utils";
// import { PageData } from "./components/page-data";
import PageData from "./components/page-data";
import getLocation from "./lib/getGeo";

export const runtime = "edge";

export default async function Page() {
  const parsedCity = headers().get("x-vercel-ip-city");
  const parsedCityTest = headers().entries();
  const headersValue = headers();
  const city =
  !parsedCity || parsedCity === "null" ? "Tokyo" : parsedCity;
  const data = await getWeatherData(city);
  console.log("this is data from whather api: ");
  console.log(data);

  // Calling getLocation, which is a function executed on client, causes this error.
  // - error Error: Attempted to call the default export of C:\Users\memor\Documents\SelfStudy\garbagemap\location_ref\weathergpt_kosuke\app\lib\getGeo.ts from the server but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.
  // const location = getLocation();
  // console.log(location);

  return(
    <div>
    <PageData data={data} />
    </div>
  );
}
