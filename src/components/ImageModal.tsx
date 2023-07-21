import React from "react";
import Header from "./Header";
import Image from "next/image";
import { useClickedImage } from "@/utils/ContextProvider";

const ImageModal = () => {
  const { clickedImage } = useClickedImage();

  return (
    <div className="absolute left-0 top-0 flex h-full w-full flex-col bg-white">
      <Header type="close" />
      <div className="flex-grow overflow-y-scroll">
        <div
          className="mx-auto max-w-3xl"
          style={{
            ...(clickedImage.width <= 768 && { maxWidth: clickedImage.width }),
          }}
        >
          <div
            className="imageContainer relative w-full"
            style={{ paddingTop: `${clickedImage.ratio * 100}%` }}
          >
            <Image
              src={clickedImage.url}
              alt="sample"
              fill
              className="bg-vbackgroundhover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
