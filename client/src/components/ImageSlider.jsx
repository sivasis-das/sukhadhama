import React, { useRef } from "react";
import './imageslider.css'
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
      <div className=" image-slider h-[400px] sm:h-[500px] flex overflow-x-auto scroll-smooth">
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
                  Alexa jopnes Luxury Real Estate
                </p>
              </div>
            </div>
          </div>
        </div>

        <div ref={secondRef} className="h-full w-fit relative min-w-full md:min-w-fit">
          <img
            className="h-full object-cover"
            src={imageUrls[1]}
            alt="client pics"
          />
          <div className="bg-black bg-opacity-40 absolute top-0 w-1/2 h-full flex items-center">
            <div className="w-11/12 m-auto text-center text-white flex flex-col items-center gap-4">
              <h3 className="sm:text-xl font-extrabold leading-5">
              "If you're considering partnering with Realtor.com , know that they have your back. I love that they are all about the partnership."
              </h3>
              <div className="max-w-48">
                <h3 className="font-bold">Stephania Votino</h3>
                <p>
                CEO,<br /> CENTURY 21 Triangle Group <br />
                  
                </p>
              </div>
            </div>
          </div>
        </div>

        <div ref={thirdRef} className="h-full w-fit relative min-w-full md:min-w-fit">
          <img
            className="h-full object-cover"
            src={imageUrls[2]}
            alt="client pics"
          />
          <div className="bg-black bg-opacity-40 absolute top-0 w-1/2 h-full flex items-center">
            <div className="w-11/12 m-auto text-center text-white flex flex-col items-center gap-4">
              <h3 className="sm:text-xl font-extrabold leading-5">
                "Realtor.com  is the foundation for our team."
              </h3>
              <div className="max-w-48">
                <h3 className="font-bold">Mike Wemert</h3>
                <p>
                Broker, CPA,<br /> Wemert Group Realty
                </p>
              </div>
            </div>
          </div>
        </div>

        <div ref={forthRef} className="h-full w-fit relative min-w-full md:min-w-fit">
          <img
            className="h-full object-cover"
            src={imageUrls[3]}
            alt="client pics"
          />
          <div className="bg-black bg-opacity-40 absolute top-0 w-1/2 h-full flex items-center">
            <div className="w-11/12 m-auto text-center text-white flex flex-col items-center gap-4">
              <h3 className="sm:text-xl font-extrabold leading-5">
                "I partner with Realtor.com  because of their reputation in supporting agents."
              </h3>
              <div className="max-w-48">
                <h3 className="font-bold">James Wemert</h3>
                <p>
                Team Leader,<br/> SukhDhama.com
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
