import React, { useState } from "react";
import { FaAngleLeft, FaAngleRight } from "react-icons/fa6";
function ImageSliderForListing({ images }) {
  const [imageIndex, setImageIndex] = useState(0);
  const prevImage = () => {
    const isFirstImage = imageIndex === 0;
    const prevImageIndex = isFirstImage?images.length-1:imageIndex-1;
    setImageIndex(prevImageIndex);
  };
  const nextImage = () => {
    const isLastImage = imageIndex === images.length-1;
    const nextImageIndex = isLastImage?0:imageIndex+1
    setImageIndex(nextImageIndex)
  };

  return (
    <div className="overflow-hidden md:w-[98%] rounded-xl h-[400px] md:h-[600px] md:m-auto">
      <div
        className="h-full bg-cover bg-no-repeat bg-center relative"
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
