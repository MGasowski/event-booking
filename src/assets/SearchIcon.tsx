import * as React from "react";
import { SVGProps } from "react";

const SearchIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.588.5a6.096 6.096 0 0 1 6.089 6.089 6.048 6.048 0 0 1-1.179 3.585l3.327 3.326a.937.937 0 0 1-1.325 1.325l-3.326-3.327a6.048 6.048 0 0 1-3.585 1.18A6.096 6.096 0 0 1 .5 6.587 6.096 6.096 0 0 1 6.588.5ZM2.373 6.59a4.22 4.22 0 0 0 4.216 4.215 4.22 4.22 0 0 0 4.215-4.215 4.22 4.22 0 0 0-4.215-4.216A4.22 4.22 0 0 0 2.373 6.59Z"
      fill="#fff"
    />
  </svg>
);

export default SearchIcon;
