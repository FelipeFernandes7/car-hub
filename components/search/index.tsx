"use client";

import { Dispatch, FormEvent, SetStateAction, useState } from "react";
import { SearchManufacturer } from "../manufacturer";

import Image from "next/image";
import glass from "../../public/magnifying-glass.svg";
import modelIcon from "../../public/model-icon.png";
import { useRouter } from "next/navigation";
function SearchButton({ otherClasses }: { otherClasses: string }) {
  return (
    <button type="submit" className={`-ml-3 z-10 ${otherClasses}`}>
      <Image
        className="object-contain"
        src={glass}
        alt={"magnifying-glass"}
        width={40}
        height={40}
      />
    </button>
  );
}

interface SearchBarProps {
  setManuFacturer: Dispatch<SetStateAction<string>>;
  setModel: Dispatch<SetStateAction<string>>;
}
export function SearchBar({ setManuFacturer, setModel }: SearchBarProps) {
  const [searchManufacturer, setSearchManufacturer] = useState("");
  const [searchModel, setSearchModel] = useState("");
  function handleSearch(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (searchManufacturer.trim() === "" && searchModel.trim() === "")
      return alert("Please provide some input");

    setModel(searchModel);
    setManuFacturer(searchManufacturer);
  }

  return (
    <form className="searchbar " onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          selected={searchManufacturer}
          setSelected={setSearchManufacturer}
        />
        <SearchButton otherClasses={"sm:hidden"} />
      </div>
      <div className="searchbar__item">
        <Image
          className="absolute w-[20px] h-[20px] ml-4 "
          src={modelIcon}
          alt={"model icon"}
          width={25}
          height={25}
        />
        <input
          type="text"
          name="model"
          value={searchModel}
          onChange={(e) => setSearchModel(e.target.value)}
          placeholder="Tiguan"
          className="searchbar__input"
        />
        <SearchButton otherClasses="sm:hidden" />
      </div>
      <SearchButton otherClasses="max-sm:hidden" />
    </form>
  );
}
