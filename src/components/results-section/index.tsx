import React from "react";
import ApartmentIcon from "../../assets/ApartmentIcon";
import FiltersIcon from "../../assets/FiltersIcon";
import FloorIcon from "../../assets/FloorIcon";
import GridViewIcon from "../../assets/GridViewIcon";
import ListViewIcon from "../../assets/ListViewIcon";
import PriceTag from "../../assets/PriceTag";
import { BookingCard } from "../booking-card";
import { FilterItem } from "../filter-item";

const tags = [
  { title: "Price", Icon: PriceTag },
  { title: "Apartment", Icon: ApartmentIcon },
  { title: "Floor", Icon: FloorIcon },
  { title: "More", Icon: FiltersIcon },
];

export const ResultsSection = () => {
  return (
    <div className="h-full overflow-hidden pb-36">
      <h1 className="text-2xl font-medium font-roboto">Obiekty w Warszawie</h1>
      <div className="text-neutral-06 mb-6">1248 wyników • Czer 14-21</div>
      <div className="flex items-center">
        {tags.map((tag, i) => (
          <FilterItem {...tag} key={i} className="mr-2" />
        ))}
        <div className="flex flex-1  justify-end">
          <div className="flex">
            <div className="mr-2">
              <GridViewIcon />
            </div>
            <ListViewIcon />
          </div>
          <div className="ml-4">
            <span>Sort by:</span>
            <span className="text-primary font-bold"> Price</span>
          </div>
        </div>
      </div>

      <div className="mt-4 h-full overflow-scroll">
        {[...Array(5)].map((el) => (
          <BookingCard
            title="Hocki Klocki"
            address="Wał Miedzeszyński 407"
            cost={69}
            facilities={["Ciepło", "Zimno"]}
            image="https://scontent-waw1-1.xx.fbcdn.net/v/t39.30808-6/279094239_5197087150373643_7364563663533789511_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=730e14&_nc_ohc=4zJPPThIzv8AX9Dh_Fk&_nc_ht=scontent-waw1-1.xx&oh=00_AfAYm7bkE5L8j9gGYSs35pnctLoK3-OAeG4C2d0ABfVPjA&oe=63F57AF0"
            rating={4.0}
            reviews={69}
            tags={["giga", "melanz"]}
          />
        ))}
      </div>
    </div>
  );
};
