/* eslint-disable import/no-anonymous-default-export */
import { NextResponse } from "next/server";
import { IncomingForm, type File } from "formidable";
import { nanoid } from "nanoid";
import { uploadImage } from "@/lib/s3";

export async function POST(request: Request) {
  const formData = await request.formData();
  const file: any = formData.get("file");
  if (!file) {
    return NextResponse.json(
      {
        success: false,
        message: "No files received.",
      },
      { status: 400 }
    );
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const localFileName = file.name.replaceAll(" ", "_");
  const ext = file.name.split(".")?.pop() || "";

  try {
    // const objectKey = `${nanoid(8)}.${ext}`;

    // const imageUrl = "";
    const imageUrl = await uploadImage({
      FileName: localFileName,
      fileBuffer: buffer,
      objectKey: `imagetoprompt/${nanoid(8)}.${ext}`,
    });

    if (!imageUrl) {
      return NextResponse.json(
        {
          success: false,
          error: "Image upload failed",
        },
        { status: 400 }
      );
    } else {
      return NextResponse.json(
        { success: true, message: "Image uploaded successfully", imageUrl },
        { status: 201 }
      );
    }
  } catch (error) {
    console.log("Upload Error occured ", error);
    return NextResponse.json(
      {
        success: false,
        message: "Image upload Error",
      },
      { status: 400 }
    );
  }
}
