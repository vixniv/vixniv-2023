import { useClickedImage, useModal } from "@/utils/ContextProvider";
import { IChat } from "@/utils/interfaces";
import { markdownParser } from "@/utils/markdownParser";
import dayjs from "dayjs";
import Image from "next/image";

const TextBubble = ({ message, side, timestamp, image }: IChat) => {
  const { setIsModalShow } = useModal();
  const { setClickedImage } = useClickedImage();

  const formattedTime = dayjs(timestamp).format("HH:mm");
  const imageRatioinPercentage =
    image?.ratio && (image.ratio * 100).toString() + "%";

  const handleImage = (e: React.MouseEvent<HTMLImageElement>) => {
    setIsModalShow(true);
    image &&
      setClickedImage({
        url: image.url,
        ratio: image.ratio,
        width: image.width,
      });
  };

  return (
    <div
      className={`flex w-10/12 ${
        side === "user" ? "ml-auto justify-end" : "mr-auto justify-start"
      }`}
    >
      {/* decide the width of bubble if contain img | w-[464px] */}
      <div
        className={`mb-[14px] rounded-[20px] ${
          side === "user" ? "bg-vblue text-white" : "bg-vbackground text-black"
        }`}
        style={{
          ...(image?.url && {
            flexBasis:
              image.ratio > 1.25 && !message
                ? `${425 / image.ratio}px`
                : "340px",
          }),
        }}
      >
        {image?.url && (
          <div
            className={`image-container relative w-full`}
            style={{
              paddingTop:
                image.ratio > 1.25 && message
                  ? "425px"
                  : imageRatioinPercentage,
            }}
          >
            <div
              className={`absolute top-0 h-full w-full px-[5px] ${
                message ? "pt-[5px]" : "py-[5px]"
              }`}
            >
              <Image
                src={image.url}
                alt="this is image"
                fill
                className="!static cursor-pointer rounded-[17px] bg-vbackgroundhover object-cover object-top"
                onClick={handleImage}
              />
            </div>
          </div>
        )}

        <div className={`relative ${message && "px-[14px] py-[10px]"}`}>
          <span
            className="whitespace-pre-wrap"
            dangerouslySetInnerHTML={{
              __html: markdownParser(message, side),
            }}
          />

          {message && (
            <span className="invisible pl-2 text-xs text-vbackground">
              {formattedTime}
            </span>
          )}
          <div
            className={`absolute right-[14px] select-none text-xs ${
              message
                ? "bottom-[7px]"
                : "bottom-[10px] rounded-[20px] bg-vbackgroundhover/50 px-1 text-white backdrop-blur-sm"
            } ${side === "user" ? "text-vbackground" : "text-vtext"}`}
          >
            {formattedTime}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextBubble;
