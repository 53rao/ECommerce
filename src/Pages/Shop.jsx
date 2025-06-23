import React from 'react';
import Navbar from "../Components/navbar";
import Vintage from "../Data/Vintage";
import Trend from "../Data/Trend";

// Array of sections to map
const sections = [
  { title: "Vintage Collection", Component: Vintage },
  { title: "Trending Now", Component: Trend },
];

export default function Shop() {
  return (
    <>
      <Navbar />
      <h1 className="text-4xl font-bold text-center my-6">Welcome to the Shop</h1>

      {sections.map(({ title, Component }, index) => (
        <section key={index} className="mb-12">
          <h2 className="text-3xl font-semibold text-center mb-6">{title}</h2>
          <Component />
        </section>
      ))}
    </>
  );
}
