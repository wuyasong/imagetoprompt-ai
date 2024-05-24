import { NextResponse } from "next/server";
import Replicate from "replicate";

const replicate = new Replicate({
  auth: process.env.REPLICATE_API_TOKEN,
});

export async function POST(request: Request) {
  const { image } = await request.json();

  const options: any = {
    version: process.env.REPLICATE_API_VERSION,
    input: { image },
  };

  const prediction = await replicate.predictions.create(options);

  if (prediction?.error) {
    return NextResponse.json({ detail: prediction.error }, { status: 500 });
  }

  console.log("prediction:", prediction);

  return NextResponse.json(prediction, { status: 201 });
}
