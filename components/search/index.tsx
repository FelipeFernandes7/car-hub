"use client";

import { useState } from "react";
import { SearchManufacturer } from "../manufacturer";

export function SearchBar() {
  const [manufacturer, setManufacturer] = useState("");

  return (
    <form className="searchbar">
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  );
}
