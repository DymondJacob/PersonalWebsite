"use client";
import { useEffect } from "react";
export default function Home() {
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://tenor.com/view/3d-diamond-animation-gif-15832617";
    script.async = true;

    document.body.appendChild(script);

    return () => {};
  }, []);
  return (
    <main className="bg-black grid place-items-center h-auto font-mono md:pr-72 md:pl-72 sm:pr-4 sm:pl-4">
      <div className="md:mt-24">
        <iframe
          src="https://giphy.com/embed/KiXiO1iR3fFhC"
          width="480"
          height="270"
          frameBorder="0"
          class="giphy-embed"
          allowFullScreen
        ></iframe>
      </div>
    </main>
  );
}
