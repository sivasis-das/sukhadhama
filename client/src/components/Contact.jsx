import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Contact({ listing }) {
  const [landlordInfo, setLandlordInfo] = useState(null);
  const [message, setMessage] = useState("");

  const onChange = (e) => {
    setMessage(e.target.value);
  };

  useEffect(() => {
    async function fetchLandLord() {
      try {
        const res = await fetch(`/api/user/${listing.userRef}`);
        const data = await res.json();
        if (data.success === false) {
          console.log(data.message);
        }
        setLandlordInfo(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchLandLord();
  }, []);
  return (
    <>
      {landlordInfo && (
        <div className="flex flex-col gap-2">
          <p className="text-gray-600">
            Contact{" "}
            <span className="font-semibold">{landlordInfo?.username}</span> for{" "}
            <span className="font-semibold">{listing.name.toLowerCase()}</span>
          </p>
          <textarea
            name="message"
            id="message"
            rows="2"
            value={message}
            onChange={onChange}
            placeholder="Enter your message here..."
            className="w-full border-2 p-3 rounded-lg outline-none focus:border-orange-600 duration-500"
          ></textarea>

          <Link
            to={`mailto:${landlordInfo?.email}?subject=Regarding ${listing.name}&body=${message}`}
            className="bg-orange-600 hover:bg-orange-800 active:bg-orange-950  text-white text-center p-3  rounded-lg hover:opacity-95 duration-300 text-xl font-semibold"
          >
            Send Message
          </Link>
        </div>
      )}
    </>
  );
}

export default Contact;
