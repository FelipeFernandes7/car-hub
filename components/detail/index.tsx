"use client";

import { CarProps } from "../card";
import { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

import Image from "next/image";

import closeIcon from "../../public/close.svg";
import { generateCarImageUrl } from "@/utils";

interface CarDetailProps {
  car: CarProps;
  isOpen: boolean;
  closeModal: () => void;
}

export function CarDetail({ car, isOpen, closeModal }: CarDetailProps) {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as={"div"} className={"relative z-10"} onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>
          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel
                  className="relative w-full max-w-lg 
                  max-h[90vh] overflow-y-auto transform rounded-2xl
                  bg-gray-900 p-6 text-left shadow-xl transition-all flex flex-col gap-5"
                >
                  <button
                    className="absolute top-2 right-2 z-10 w-fit p-2
                     bg-primary-blue-100 rounded-full"
                    type="button"
                    onClick={closeModal}
                  >
                    <Image
                      src={closeIcon}
                      alt={"clos button"}
                      height={20}
                      width={20}
                      className="object-contain"
                    />
                  </button>
                  <div className="flex-1 flex flex-col gap-3">
                    <div className="relative w-full h-40 bg-pattern bg-cover rounded-lg">
                      <Image
                        className="object-contain"
                        src={generateCarImageUrl(car, "angle")}
                        alt={"car model"}
                        priority
                        fill
                      />
                    </div>
                    <div className="flex gap-3">
                      <div className="flex-1 relative w-full h-24 bg-gray-800 rounded-lg">
                        <Image
                          className="object-contain"
                          src={generateCarImageUrl(car, "29")}
                          alt={"car model"}
                          priority
                          fill
                        />
                      </div>
                      <div className="flex-1 relative w-full h-24  bg-gray-800 rounded-lg">
                        <Image
                          className="object-contain mt-5"
                          src={generateCarImageUrl(car, "33")}
                          alt={"car model"}
                          priority
                          fill
                        />
                      </div>
                      <div className="flex-1 relative w-full h-24 bg-gray-800 rounded-lg">
                        <Image
                          className="object-contain"
                          src={generateCarImageUrl(car, "13")}
                          alt={"car model"}
                          priority
                          fill
                        />
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col gap-2">
                    <h2 className="font-semibold text-xl capitalize text-white">
                      {car.make} {car.make}
                    </h2>
                    <div className="mt-3 flex flex-wrap gap-4">
                      {Object.entries(car).map(([key, value]) => (
                        <div
                          key={key}
                          className="flex justify-between gap-5 w-full text-right"
                        >
                          <h4 className="text-primary-blue-100 capitalize">
                            {key.split("_").join(" ")}
                          </h4>
                          <p className="text-white font-semibold">{value}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
