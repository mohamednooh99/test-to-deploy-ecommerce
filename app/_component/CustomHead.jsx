 
"use client";
import { useEffect } from "react";

export default function CustomHead() {
  useEffect(() => {
    // Set document title
    document.title = "Elessi E-commerce";

    // Set favicon
    const link = document.createElement("link");
    link.rel = "icon";
    link.href = "/favicon.png"; // Make sure the favicon is in the public folder
    document.head.appendChild(link);

    return () => document.head.removeChild(link); // Clean up on unmount
  }, []);

  return null;
}
