"use client";

import { useEffect, useState } from "react";
import { CarCard, Filter, Hero, SearchBar, ShowMore } from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
import { fetchCars } from "@/utils";
import { CarProps } from "@/components/card";

import Image from "next/image";
import loaderIcon from "../public/loader.svg";

export type CarState = CarProps[] & { message?: string };
export default function Home() {
  const [allCars, setAllCars] = useState<CarState>([]);
  const [loading, setLoading] = useState(false);

  const [manufacturer, setManufacturer] = useState("");
  const [model, setModel] = useState("");

  const [fuel, setFuel] = useState("");
  const [year, setYear] = useState(2022);

  const [limit, setLimit] = useState(10);
  async function getCars() {
    setLoading(true);
    try {
      const result = await fetchCars({
        manufacturer: manufacturer.toLowerCase() || "",
        model: model.toLowerCase() || "",
        fuel: fuel.toLowerCase() || "",
        year: year || 2022,
        limit: limit || 10,
      });

      setAllCars(result);
    } catch {
      console.error();
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getCars();
  }, [fuel, year, limit, manufacturer, model]);

  return (
    <main className="overflow-hidden bg-gray-950">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className=" text-4xl font-extrabold text-gray-200">
            {" "}
            Car Catalogue
          </h1>
          <p className="text-gray-200">Explore the cars you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar setManuFacturer={setManufacturer} setModel={setModel} />
          <div className="home__filter-container">
            <Filter options={fuels} setFilter={setFuel} />
            <Filter options={yearsOfProduction} setFilter={setYear} />
          </div>
        </div>
        {allCars.length > 0 ? (
          <section>
            <div className="home__cars-wrapper">
              {allCars.map((car) => (
                <CarCard car={car} />
              ))}
            </div>
            {loading && (
              <div className="mt-16 w-ful flex-center">
                <Image
                  className="object-contain"
                  src={loaderIcon}
                  alt={"loader"}
                  height={50}
                  width={50}
                />
              </div>
            )}
            <ShowMore
              pageNumber={limit / 10}
              isNextPage={limit > allCars.length}
              setLimit={setLimit}
            />
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-white text-xl font-bold">Oops, no results </h2>
            <p className="text-white">{allCars.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
