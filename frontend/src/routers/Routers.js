import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import CarListing from "../pages/CarListing";
import CarDetails from "../pages/CarDetails";
import Blog from "../pages/Blog";
import BlogDetails from "../pages/BlogDetails";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
import Map from "../pages/Map";
import SignUp from "../pages/Register";
import SignInSide from "../pages/Login";
import { useAuthContext } from "../hooks/consumeContext";
import { Nav } from "reactstrap";
const Routers = () => {
  const { user } = useAuthContext();
  return (
    <Routes>
      {/* <Route path="/" element={<Navigate to="/home" />} /> */}
      <Route path="/" element={user ? <Map /> : <Navigate to="/login" />} />
      <Route path="/petrostation/:id" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<CarListing />} />
      <Route path="/services/:slug" element={<CarDetails />} />
      <Route
        path="/register"
        element={!user ? <SignUp /> : <Navigate to="/" />}
      />
      <Route
        path="/login"
        element={!user ? <SignInSide /> : <Navigate to="/" />}
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Routers;
