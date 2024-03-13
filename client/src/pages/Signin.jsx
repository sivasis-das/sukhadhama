import React, { useState } from 'react'
import { RxCross1 } from 'react-icons/rx';
import { Link, useNavigate } from 'react-router-dom';

function Signin() {
  const [formData, setFormData] = useState({});
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      console.log(data);
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      setError(null);
      console.log(data);
      navigate("/");
    } catch (error) {
      setLoading(false);
      setError(error.message);
    }
  };
  return (
    <>
      <div className=" bg-gray-200 w-full min-h-screen  flex items-center justify-center absolute top-0 bottom-0 left-0 right-0 -z-10">
        <div className="w-11/12 xl:w-4/12 bg-white rounded-xl border-black border-2">
          <div className="w-11/12 m-auto">
            <div className="flex items-center justify-between mb-2 py-4">
              <h3 className="text-2xl font-semibold">
                Log in to your account
              </h3>
              <p>
                <Link to="/">
                  <RxCross1 size={30} />
                </Link>
              </p>
            </div>

            <div>
            {error && <p className="text-red-500 mb-3 font-semibold">{error}</p>}
              <form
                action=""
                method="post"
                className="flex flex-col "
                onSubmit={handleSubmit}
              >
                
                <input
                  type="text"
                  name="email"
                  id="email"
                  onChange={handleChange}
                  required
                  className="p-3 border-zinc-300 border-2 rounded-lg placeholder:text-xl text-xl mb-4 transition ease-in duration-300 outline-none focus:ring-2 focus:ring-orange-600"
                  placeholder="Enter your email"
                />
                <input
                  type="password"
                  name="password"
                  id="password"
                  onChange={handleChange}
                  required
                  placeholder="Enter your password"
                  className="p-3 border-zinc-300 border-2 rounded-lg placeholder:text-xl text-xl mb-4  transition ease-in duration-300 outline-none focus:ring-2 focus:ring-orange-600"
                />
                
                <button
                  disabled={loading}
                  className="p-3 bg-orange-600 text-white text-xl rounded-lg hover:bg-orange-700 active:bg-orange-900 transition ease-in-out duration-300"
                >
                  {loading ? "Loading..." : "Sign In"}
                </button>
              </form>
            </div>
            <div className="flex before:border-t before:border-gray-900 before:flex-1 after:border-t after:border-gray-900 after:flex-1 items-center  my-2">
              <p className="text-center mx-2 text-lg font-semibold">or</p>
            </div>
            <div className="text-center mb-3">
              <h3 className="">
                Dont have an account?{" "}
                <span>
                  {" "}
                  <Link to="/sign-up" className="font-semibold">
                    Sign up
                  </Link>
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Signin