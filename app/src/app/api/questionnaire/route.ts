// Axois
import axios from "axios";

// Types
import { NextRequest, NextResponse } from "next/server";

const base = process.env.DJANGO_HOST!;

export const POST = async (req: NextRequest, res: NextResponse) => {
  const url = new URL("questionnaire/questionnaire", base);

  await axios
    .get(`${url}`)
    .then((response) => {
      return NextResponse.json(response.data);
    })
    .catch((error) => {
      console.log("Error: " + error);
      return NextResponse.json(error);
    });
};
