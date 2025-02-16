import React from "react";
import Layout from "../components/layout.js";

const LandingPage = () => {
  return (
    <Layout>
      <h1 className="text-5xl font-bold text-white">Welcome to Emotion AI</h1>
      <p className="text-lg text-gray-300 mt-4">Analyze emotions in real-time with AI.</p>
    </Layout>
  );
};

export default LandingPage;
