import React from "react";
import Header from "./Header";
import Image from "next/image";
import { useClickedImage } from "@/utils/ContextProvider";

const ImageModal = () => {
  const { clickedImage } = useClickedImage();

  return (
    <div className="absolute left-0 top-0 w-full bg-white">
      <Header type="close" />
      <div className="mx-auto max-w-3xl px-2">
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
  );
};

export default ImageModal;
