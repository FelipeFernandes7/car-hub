"use client";

import { Button } from "..";
import { Dispatch, SetStateAction } from "react";

interface ShowMoreProps {
  pageNumber: number;
  isNextPage: boolean;
  setLimit: Dispatch<SetStateAction<number>>;
}
export function ShowMore({ pageNumber, isNextPage, setLimit }: ShowMoreProps) {
  function handleNavigation() {
    const newLimit = (pageNumber + 1) * 10;
    setLimit(newLimit);
  }

  return (
    <div className="w-full flex-center gap-5 mt-10 ">
      {!isNextPage && (
        <Button
          title={"Show more..."}
          btnType="button"
          containerStyles="bg-primary-blue text-white rounded-full"
          handleClick={handleNavigation}
        />
      )}
    </div>
  );
}
