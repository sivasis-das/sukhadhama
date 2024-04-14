import React, { useRef } from "react";

function ImageSlider({ imageUrls }) {
  const firstRef = useRef(null);
  const secondRef = useRef(null);
  const thirdRef = useRef(null);
  const forthRef = useRef(null);

  function handleScrollToFirst() {
    firstRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

  function handleScrollToSecond() {
    secondRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

  function handleScrollToThird() {
    thirdRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

  function handleScrollToForth() {
    forthRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center'
    });
  }

  return (
    <>
      <div className="h-[400px] sm:h-[500px] flex overflow-x-auto scroll-smooth">
        <div ref={firstRef} className="h-full w-fit relative min-w-full md:min-w-fit">
          <img
            className="h-full object-cover"
            src={imageUrls[0]}
            alt="client pics"
          />
          <div className="bg-black bg-opacity-40 absolute top-0 w-1/2 h-full flex items-center">
            <div className="w-11/12 m-auto text-center text-white flex flex-col items-center gap-4">
              <h3 className="sm:text-xl font-extrabold leading-5">
                "Working with SukhDhama.com was the best desicion I've ever
                made. We're doing $600 million dollars a year in transaction,
                and i owe a lot of that succes to SukhaDhama.com "
              </h3>
              <div className="max-w-48">
                <h3 className="font-bold">Anthony Doja</h3>
                <p>
                  CEO/Brand Founder, <br />
                  Anthony Doja Luxury Real Estate
                </p>
              </div>
            </div>
          </div>
        </div>
        <div ref={secondRef} className="h-full w-fit relative min-w-full md:min-w-fit">
          <img
            className="h-full object-cover"
            src={imageUrls[0]}
            alt="client pics"
          />
          <div className="bg-black bg-opacity-40 absolute top-0 w-1/2 h-full flex items-center">
            <div className="w-11/12 m-auto text-center text-white flex flex-col items-center gap-4">
              <h3 className="sm:text-xl font-extrabold leading-5">
                "Working with SukhDhama.com was the best desicion I've ever
                made. We're doing $600 million dollars a year in transaction,
                and i owe a lot of that succes to SukhaDhama.com "
              </h3>
              <div className="max-w-48">
                <h3 className="font-bold">Anthony Doja</h3>
                <p>
                  CEO/Brand Founder, <br />
                  Anthony Doja Luxury Real Estate
                </p>
              </div>
            </div>
          </div>
        </div>
        <div ref={secondRef} className="h-full w-fit relative min-w-full md:min-w-fit">
          <img
            className="h-full object-cover"
            src={imageUrls[0]}
            alt="client pics"
          />
          <div className="bg-black bg-opacity-40 absolute top-0 w-1/2 h-full flex items-center">
            <div className="w-11/12 m-auto text-center text-white flex flex-col items-center gap-4">
              <h3 className="sm:text-xl font-extrabold leading-5">
                "Working with SukhDhama.com was the best desicion I've ever
                made. We're doing $600 million dollars a year in transaction,
                and i owe a lot of that succes to SukhaDhama.com "
              </h3>
              <div className="max-w-48">
                <h3 className="font-bold">Anthony Doja</h3>
                <p>
                  CEO/Brand Founder, <br />
                  Anthony Doja Luxury Real Estate
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-2 mt-5">
        <div onClick={handleScrollToFirst} className="size-5 rounded-full bg-gray-500 "></div>
        <div onClick={handleScrollToSecond} className="size-5 rounded-full bg-gray-500"></div>
        <div onClick={handleScrollToThird} className="size-5 rounded-full bg-gray-500"></div>
        <div onClick={handleScrollToForth} className="size-5 rounded-full bg-gray-500"></div>
      </div>
    </>
  );
}

export default ImageSlider;
