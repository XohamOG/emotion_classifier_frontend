import React from "react";
import Sidebar from "./sidebar";
import SplineBackground from "./splinebackground";

const Layout = ({ children }) => {
  return (
    <div className="relative h-screen w-screen overflow-hidden">
      {/* Spline in the background, behind everything */}
      <SplineBackground />

      {/* Sidebar stays above everything */}
      <div className="relative z-20">
        <Sidebar />
      </div>

      {/* Main Content (Text should be above the Spline background) */}
      <main className="absolute top-0 left-0 w-full h-full flex items-center justify-center z-10">
        {children}
      </main>
    </div>
  );
};

export default Layout;
