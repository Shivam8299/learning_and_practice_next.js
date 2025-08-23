"use client"

"use client";
import React from "react";

export default function Page({ params }) {
  const { clases } = React.use(params); // ✅ unwrap inside client component
  return <div>Class: {clases}</div>;
}


