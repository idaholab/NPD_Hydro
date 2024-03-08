// Axois
import axios from "axios";

// Types
import { NextRequest, NextResponse } from "next/server";

const base = process.env.NEXT_PUBLIC_DJANGO_HOST!;

export const POST = async (req: NextRequest, res: NextResponse) => {
  await axios
    .get(`${base}/questionnaire/questionnaire`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log("Error: " + error);
      return error;
    });
};
