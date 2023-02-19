import * as React from "react";
import { SVGProps } from "react";

const FiltersIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={18}
    height={17}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M7.455 15.8a2.68 2.68 0 1 0 0-5.358 2.68 2.68 0 0 0 0 5.358ZM4.776 13.12H1M16.988 13.12h-6.642M10.533 6.454a2.68 2.68 0 1 0 0-5.358 2.68 2.68 0 0 0 0 5.358ZM13.224 3.775H17M1 3.775h6.642"
      stroke="#6B6F7B"
      strokeWidth={1.2}
      strokeMiterlimit={10}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default FiltersIcon;
