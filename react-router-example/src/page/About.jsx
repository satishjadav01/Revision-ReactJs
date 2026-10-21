import React from "react";
import { useLocation } from "react-router-dom";

const About = () => {
  const location = useLocation();
  return (
    <div className="rounded-xl bg-purple-100 p-8">
      <h1 className="text-3xl font-bold text-purple-700">About Page</h1>
      <p className="mt-3">Current URL : {location.pathname}</p>
    </div>
  );
};

export default About;
