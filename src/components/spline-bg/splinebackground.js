import React, { Suspense, lazy, memo } from "react";

const Spline = lazy(() => import("@splinetool/react-spline"));

const SplineBackground = memo(() => {
  return (
    <div className="splinebackground">
      <Suspense fallback={<div className="w-full h-full bg-black">Loading...</div>}>
        <Spline scene="https://prod.spline.design/s3xQBiilV6s7ZGyq/scene.splinecode" />
      </Suspense>
    </div>
  );
});

export default SplineBackground;
