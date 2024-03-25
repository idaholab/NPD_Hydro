// Axois
import axios from "axios";

// Types
import { NextRequest, NextResponse } from "next/server";

const base = process.env.DJANGO_HOST!;

export const POST = async (req: NextRequest, res: NextResponse) => {
  const body = await req.json();

  const url = new URL("npd/counties", base);

  let counties = await axios
    .post(`${url}`, body)
    .then((response) => {
      return NextResponse.json(response.data);
    })
    .catch((error) => {
      console.log("Error: " + error);
      return NextResponse.json(error);
    });

  return NextResponse.json(counties);
};
