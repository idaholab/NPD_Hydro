// Axois
import axios from "axios";

// Types
import { NextRequest, NextResponse } from "next/server";

const base = process.env.DJANGO_HOST!;

export const POST = async (req: NextRequest, res: NextResponse) => {
  const url = new URL("questionnaire/questionnaire", base);

  let response = await axios
    .get(`${url}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log("Error: " + error);
      return error;
    });
  return NextResponse.json(response);
};
