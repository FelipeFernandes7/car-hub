"use client";
import { Dispatch, Fragment, SetStateAction, useState } from "react";
import { useRouter } from "next/navigation";
import { Listbox, Transition } from "@headlessui/react";

import Image from "next/image";
import chevronIcon from "../../public/chevron-up-down.svg";
import { updateSearchParams } from "@/utils";

type Options = {
  title: string;
  value: string;
};
export interface FilterProps<T> {
  options: Options[];
  setFilter: (selected: T) => void;
}
export function Filter<T>({ options, setFilter }: FilterProps<T>) {
  const [menu, setMenu] = useState(options[0]);

  return (
    <div className="w-fit">
      <Listbox
        value={menu}
        onChange={(e) => {
          setMenu(e);
          setFilter(e.value as unknown as T);
        }}
      >
        <div className="relative w-fit z-10">
          <Listbox.Button className={"custom-filter__btn"}>
            <span className="block truncate">{menu.title}</span>
            <Image
              className="ml-4 object-contain"
              src={chevronIcon}
              alt={"up down"}
              width={20}
              height={20}
            />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className={"custom-filter__options"}>
              {options.map((option) => (
                <Listbox.Option
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 px-4 ${
                      active ? "bg-primary-blue text-white" : "text-gray-100"
                    }`
                  }
                  key={option.title}
                  value={option}
                >
                  {({ selected }) => (
                    <span
                      className={`block truncate ${
                        selected ? "font-medium" : "font-normal"
                      }`}
                    >
                      {option.title}
                    </span>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
}
