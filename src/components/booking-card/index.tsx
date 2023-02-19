import React from "react";
import FavouriteIcon from "../../assets/FavouriteIcon";
import LocationPinIcon from "../../assets/LocationPinIcon";
import StarIcon from "../../assets/StarIcon";
import { PillTag } from "../pill-tag";

interface BookingCardProps {
  title: string;
  address: string;
  facilities: string[];
  tags: string[];
  rating: number;
  reviews: number;
  cost: number;
  image?: string;
}

export const BookingCard = ({
  title,
  address,
  facilities,
  tags,
  rating,
  reviews,
  cost,
  image,
}: BookingCardProps) => {
  return (
    <div className="flex h-64 shadow-lg hover:shadow-2xl cursor-pointer z-10 rounded-xl border border-neutral-03 p-4 mb-4">
      <div>
        <img
          src={image}
          className="rounded-xl h-full w-auto "
          style={{ objectFit: "cover", aspectRatio: 1 }}
        />
      </div>
      <div className="flex-1 relative pl-4 h-full">
        <div className="flex flex-col h-full">
          <div className="absolute top-0 right-0">
            <FavouriteIcon />
          </div>
          <span className="text-2xl font-medium font-roboto">{title}</span>
          <div className="flex items-center">
            <span className="mr-2">
              <LocationPinIcon />
            </span>
            <span className=" text-base font-roboto text-neutral-07">
              {address}
            </span>
          </div>
          <div className="text-base font-roboto text-neutral-06 mt-3">
            {facilities.map((facility, i: number) => (
              <>
                <span className={i === 0 ? "mr-2" : "mx-2"}>{facility}</span>
                {i !== facilities.length - 1 && <span>•</span>}
              </>
            ))}
          </div>

          <div className="flex">
            {tags.map((tag) => (
              <PillTag color="primary" title={tag} background="#2B67F6" />
            ))}
          </div>

          <div className="flex items-end  h-full justify-between ">
            <div className="flex  ">
              <div className="flex w-full items-center">
                {" "}
                <div className="mr-2 font-roboto font-medium text-xl">
                  {rating.toFixed(1)}
                </div>
                <div className="flex">
                  {[...Array(rating)].map(() => (
                    <StarIcon active />
                  ))}
                  {[...Array(5 - rating)].map(() => (
                    <StarIcon active={false} />
                  ))}
                </div>
                <span>({reviews} opinii)</span>
              </div>
            </div>

            <div className="text-end ">
              <span className="font-roboto font-bold text-2xl">{cost}zł </span>
              <span className="text-neutral-06 ">/miesiąc</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
