import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
function ImageSliderForListing({ images }) {
  const [imageIndex, setImageIndex] = useState(0);
  const prevImage = () => {
    if (imageIndex != 0) {
      if (imageIndex <= images.length - 1) {
        setImageIndex(imageIndex - 1);
      }
    } else if (imageIndex == 0) {
        setImageIndex(images.length-1)
    }
  };
  const nextImage = () => {
    if (imageIndex == images.length - 1) {
      setImageIndex(0);
    } else {
      setImageIndex((prev) => prev + 1);
    }
  };

  return (
    <div className="md:rounded-xl overflow-hidden  md:w-[98%] md:m-auto">
      <div
        className="h-[400px] bg-contain bg-no-repeat bg-center relative lg:w-3/4"
        style={{ backgroundImage: `url(${images[imageIndex]})` }}
      >
        <div
          onClick={prevImage}
          className="bg-white p-1 rounded-full w-fit absolute top-[45%] left-1 bg-opacity-5 hover:bg-opacity-35 "
        >
          <FaAngleLeft size={30} className="text-orange-600" />
        </div>
        <div
          onClick={nextImage}
          className="bg-white p-1 rounded-full w-fit absolute top-[45%] right-1 bg-opacity-5 hover:bg-opacity-35"
        >
          <FaAngleRight size={30} className="text-orange-600" />
        </div>
      </div>
    </div>
  );
}

export default ImageSliderForListing;
