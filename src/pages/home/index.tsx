import React from "react";
import Map from "../../assets/Map";
import { Navbar } from "../../components/navbar";
import { ResultsSection } from "../../components/results-section";

export function Home() {
  return (
    <div>
      <div className="h-screen pt-28 flex">
        <div className="h-full p-6 pb-0 w-2/5">
          <ResultsSection />
        </div>
        <div className="h-full  w-3/5 p-6">
          <iframe
            width="425"
            height="350"
            className="h-full w-full rounded-xl"
            src="https://www.openstreetmap.org/export/embed.html?bbox=20.818061828613285%2C52.15287187547031%2C21.188850402832035%2C52.32254042322073&amp;layer=mapnik&amp;marker=52.23778722655545%2C21.003456115722656"
          />
        </div>
      </div>
    </div>
  );
}
