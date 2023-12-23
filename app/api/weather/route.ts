import { NextRequest, NextResponse } from "next/server";
import { geolocation } from "@vercel/edge";
import { getWeatherData } from "@/app/lib/utils";
import { headers } from "next/headers";

export const runtime = "edge";

export async function GET(req: NextRequest) {
  // let location = req.nextUrl.searchParams.get("location");
  let location = "tokyo";
  console.log(req);
  if (!location) {
    const { city } = geolocation(req);
    location = city || "San Francisco";
  }
  const headersValue = headers();

  const response = await getWeatherData(location);

  return NextResponse.json({
    ...response
    ,infoLink: `https://weathergpt.vercel.app/${encodeURIComponent(location)}`
    ,"req-nexturl": req.nextUrl
    ,...req.geo
    ,...req.nextUrl
    ,...headersValue
  });
}
