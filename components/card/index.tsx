"use client";

import { calculateCarRent, generateCarImageUrl } from "@/utils";
import { Button, CarDetail } from "..";

import Image from "next/image";

import steering from "../../public/steering-wheel.svg";
import rightIcon from "../../public/right-arrow.svg";
import carImg from "../../public/hero.png";
import tire from "../../public/tire.svg";
import gas from "../../public/gas.svg";
import { useState } from "react";

export interface CarProps {
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}

interface CarCardProps {
  car: CarProps;
}
export function CarCard({ car }: CarCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const { city_mpg, year, make, model, transmission, drive } = car;
  const carRent = calculateCarRent(city_mpg, year);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
      </div>
      <p className="flex mt-6 text-[32px] font-extrabold">
        <span className="self-start text-[14px] font-bold">$</span>
        {carRent}
        <span className="self-end text-[14px] font-medium">/day</span>
      </p>
      <div className="relative w-full h-40 my-3 object-contain">
        <Image
          className="object-contain"
          src={generateCarImageUrl(car)}
          alt={"car model"}
          priority
          fill
        />
      </div>
      <div className="relative flex w-full mt-2">
        <div className="flex group-hover:invisible w-full justify-between text-gray">
          <div className=" flex flex-col justify-center items-center gap-2">
            <Image
              src={steering}
              alt={"steering wheel"}
              width={20}
              height={20}
            />
            <p className="text-[14px]">
              {transmission === "a" ? "Automatic" : "Manual"}
            </p>
          </div>
          <div className=" flex flex-col justify-center items-center gap-2">
            <Image src={tire} alt={"steering wheel"} width={20} height={20} />
            <p className="text-[14px]">{drive.toUpperCase()}</p>
          </div>
          <div className=" flex flex-col justify-center items-center gap-2">
            <Image src={gas} alt={"steering wheel"} width={20} height={20} />
            <p className="text-[14px]">{city_mpg} MPG</p>
          </div>
        </div>
        <div className="car-card__btn-container">
          <Button
            handleClick={() => setIsOpen(true)}
            title={"View More"}
            containerStyles="w-full  py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text[14px] leading-[17px] font-bold"
            rightIcon={rightIcon}
          />
        </div>
      </div>
      <CarDetail car={car} isOpen={isOpen} closeModal={() => setIsOpen(false)} />
    </div>
  );
}
