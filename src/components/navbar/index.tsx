import React from "react";
import FavouriteIcon from "../../assets/FavouriteIcon";
import NotificationIcon from "../../assets/NotificationIcon";
import { default as img } from "../../assets/react.svg";
import SearchIcon from "../../assets/SearchIcon";
import Separator from "../../assets/Separator";
import { Badge } from "../badge";

export const Navbar = () => {
  return (
    <div className="bg-neutral-00 shadow-lg w-full h-28 p-6 flex items-center fixed top-0">
      <div className="flex flex-1 ">
        <div className="flex  items-center flex-row ">
          <div className="mr-1">
            <img src={img} />
          </div>
          <div className="text-3xl">
            <span className="font-bold text-primary">Event</span>
            <span className="font-extralight">Booking</span>
          </div>
        </div>

        <div className="relative w-1/2 mr-6">
          <input
            type="search"
            id="default-search"
            className="bg-neutral-04 rounded-md  block w-full p-4 pr-10 text-sm text-gray-900 mx-4 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Select Place"
            // value="New York"
            required
          />
          <div className="absolute inset-y-0 right-0 flex items-center pl-3 pointer-events-none">
            <div className="bg-primary p-3 rounded-full">
              <SearchIcon />
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1 flex justify-end ">
        <div className="flex items-center">
          <div className="relative mx-2 ">
            <NotificationIcon />
            <Badge
              title="1"
              color="primary"
              className="-right-2 -top-2 absolute  "
            />
          </div>
        </div>
        <div className="">
          <FavouriteIcon />
        </div>
      </div>
      <div className="mx-4">
        <Separator />
      </div>

      <div className="flex">
        <div className="relative w-10 h-10 overflow-hidden bg-gray-6 rounded-full dark:bg-gray-6">
          <svg
            className="absolute w-12 h-12 text-gray-400 -left-1"
            fill="#D8E2EB"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clip-rule="evenodd"
            ></path>
          </svg>
        </div>

        <div className="flex flex-col mx-2">
          <span className="font-bold">Twój Stary</span>
          <span className="text-sm text-primary">Pijany</span>
        </div>

        <div className="flex mx-2 ">
          <select className="border border-neutral-04 rounded-2xl p-2 ">
            <option selected>US </option>
          </select>
        </div>
      </div>
    </div>
  );
};
