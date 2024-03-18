import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Signin from "./pages/Signin";
import SignUp from "./pages/SignUp";
import PrivateRoute from "./components/PrivateRoute";
import CreateListings from "./pages/CreateListings";
import Advertise from "./pages/Advertise";
import UpdateListing from "./pages/UpdateListing";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route
          path="profile"
          element={
            <PrivateRoute>
              <Profile />
            </PrivateRoute>
          }
        />

        <Route path="sign-up" element={<SignUp />} />
        <Route path="sign-in" element={<Signin />} />
        <Route path="marketing" element={<Advertise />} />

        <Route
          path="create-listing"
          element={
            <PrivateRoute>
              <CreateListings />
            </PrivateRoute>
          }
        />

        <Route
          path="update-listing/:id"
          element={
            <PrivateRoute>
              <UpdateListing />
            </PrivateRoute>
          }
        />
      </Route>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
