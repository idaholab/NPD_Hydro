// Axois
import axios from "axios";

// Types
import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";

const base = process.env.NEXT_PUBLIC_DJANGO_HOST!;

export const POST = async (req: Request, res: NextResponse) => {
  const body = await req.json();
  console.log(base);

  let dams = await axios
    .post(`${base}/npd/inventory`, body)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log("Error: " + error);
      return error;
    });
  return NextResponse.json(dams);
};
