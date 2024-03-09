// Axois
import axios from "axios";

// Types
import { NextRequest, NextResponse } from "next/server";

const base = process.env.NEXT_PUBLIC_DJANGO_HOST!;

export const POST = async (req: NextRequest, res: NextResponse) => {
  const body = await req.json();

  let counties = await axios
    .post(`${base}/npd/counties`, body)
    .then((response) => {
      console.log(response);
      return response.data;
    })
    .catch((error) => {
      console.log("Error: " + error);
      return NextResponse.json(error);
    });

  return NextResponse.json(counties);
};
