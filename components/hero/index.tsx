"use-client";

import Image from "next/image";
import { Button } from "../button";
import hero from "../../public/hero.png";
export function Hero() {
  function handleScroll() {
    const nextSection = document.getElementById("discover");

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  }
  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">
          Find,book, or rent a car -- quickly and easily
        </h1>
        <p className="hero__subtitle">
          Streamline your car experience with our effortless booking process.
        </p>
        <Button
          title="Explore cars"
          handleClick={handleScroll}
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image src={hero} alt={"hero"} fill className="object-contain" />
        </div>
        <div className="hero__image-overlay" />
      </div>
    </div>
  );
}
