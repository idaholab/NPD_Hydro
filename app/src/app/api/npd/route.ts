// Axois
import axios from "axios";

// Types
import { NextResponse } from "next/server";

const base = process.env.DJANGO_HOST!;

export const POST = async (req: Request, res: NextResponse) => {
  const body = await req.json();

  const url = new URL("npd/inventory", base);

  let response = await axios
    .post(`${url}`, JSON.stringify(body))
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log("Error: " + error);
      return error;
    });
  return NextResponse.json(response);
};
