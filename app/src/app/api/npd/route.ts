// Axois
import axios from "axios";

// Types
import { NextResponse } from "next/server";

const base = process.env.DJANGO_HOST!;

export const POST = async (req: Request, res: NextResponse) => {
  console.log("NEXT_PUBLIC_DJANGO_HOST: " + base);
  const body = await req.json();

  let dams = await axios
    .post(`${base}/npd/inventory`, JSON.stringify(body))
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log("Error: " + error);
      return NextResponse.json(error);
    });
  return NextResponse.json(dams);
};
