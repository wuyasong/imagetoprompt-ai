/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable react/no-unescaped-entities */
"use client";

import { FC, useState } from "react";
import Link from "next/link";
import { useDropzone } from "react-dropzone";
import { toast } from "sonner";
import { Icons } from "@/components/Icons";
import "@/styles/upload.css";
import { usePrediction } from "@/hooks/usePrediction";
import { Spinner } from "@/components/Spinner";

const UploadSection = () => {
  const [uploading, setUploading] = useState(false);
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    maxFiles: 1,
    maxSize: 5242880,
    accept: {
      "image/jpeg": [],
      "image/png": [],
    },
    onDrop: (acceptedFiles: any) => {
      setFiles(
        acceptedFiles.map((file: Blob) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
      handleFile(acceptedFiles);
      // handleImageToPrompt(URL.createObjectURL(acceptedFiles[0]));
    },
  });
  const { prediction, error, handleSubmit } = usePrediction();

  // upload image
  const handleFile = async (acceptedFiles: any[]) => {
    setUploading(true);
    const formData = new FormData();
    acceptedFiles.map((file: Blob) => {
      console.info("file", file);
      formData.append("file", file);
    });

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const body = await response.json();

      if (body.success) {
        handleImageToPrompt(body.imageUrl);
      } else {
        toast.error(body.message);
      }

      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };

  //   image to prompt
  const handleImageToPrompt = async (imageUrl: string) => {
    await handleSubmit({ image: imageUrl });
  };

  const copyPrompt = async (content: string = "") => {
    await navigator.clipboard.writeText(content.trim());
    toast.success("Copied!");
  };

  return (
    <section className="w-full bg-white dark:bg-gray-900" id="image_to_prompt">
      <div className="container flex flex-col items-center py-12 mx-auto">
        <div
          {...getRootProps({ className: "dropzone" })}
          className="flex w-full max-w-lg mx-auto justify-center rounded-md border-2 border-dashed border-gray-300 px-6 pt-12 pb-12"
        >
          <div className="space-y-1 text-center">
            <input {...getInputProps()} />
            <Icons.ImagePlus className="mx-auto h-12 w-12 text-gray-400" />
            <p className="flex text-sm text-gray-600">
              <label className="relative cursor-pointer rounded-md bg-white font-medium text-green-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-green-500 focus-within:ring-offset-2 hover:text-green-500">
                Upload a photo{" "}
              </label>
              <span className="pl-1">or drag and drop</span>
            </p>
            <p className="text-xs text-gray-500">Only jpeg or PNG up to 4MB</p>
          </div>
        </div>
        {files.length > 0 && (
          <aside className="w-full max-w-lg mx-auto grid grid-cols-1 sm:grid-cols-2 gap-x-4 mt-6 min-h-32 rounded-md bg-gray-100">
            {/* Preivew Image */}
            <div className="preview-img-wrapper px-10 mt-2">
              <h3 className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200">
                Upload
              </h3>
              {files.map((file: any) => (
                <div className="rounded-md py-4 mb-2" key={file.name}>
                  <div className="relative flex justify-center items-center overflow-hidden">
                    <img
                      src={file.preview}
                      className="block h-full w-auto"
                      // Revoke data uri after image is loaded
                      onLoad={() => {
                        URL.revokeObjectURL(file.preview);
                      }}
                    />
                    {uploading ? (
                      <div className="flex items-center justify-center absolute top-0 left-0 w-full h-full z-10 bg-opacity-50 bg-white">
                        <Spinner />
                      </div>
                    ) : null}
                  </div>
                </div>
              ))}
            </div>
            <div className="preview-prompt-wrapper px-4 pb-4 mt-2">
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold text-gray-700 dark:text-white hover:text-gray-600 dark:hover:text-gray-200">
                  Prompt
                </h3>
                <button onClick={() => copyPrompt(prediction?.output)}>
                  <Icons.Copy className="w-5 h-5 text-gray-400 hover:text-gray-600" />
                </button>
              </div>
              {/* Prompt */}
              {prediction?.output ? (
                <>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                    {prediction?.output}
                  </p>
                </>
              ) : (
                <div className="flex mt-2 justify-center">
                  <Spinner />
                </div>
              )}
            </div>
          </aside>
        )}
      </div>
    </section>
  );
};

export default UploadSection;
