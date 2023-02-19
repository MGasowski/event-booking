import * as React from "react";
import { SVGProps } from "react";

const FavouriteIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={55}
    height={55}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect x={0.325} width={54.571} height={54.571} rx={22} fill="#fff" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.018 27.928a6.4 6.4 0 0 1 9.072-9.032l.438.438.437-.438a6.398 6.398 0 0 1 9.051 0 6.402 6.402 0 0 1 .02 9.032l-8.683 9.194a1.136 1.136 0 0 1-1.651 0l-8.684-9.194Zm9.51 6.758 7.859-8.321.023-.023a4.131 4.131 0 0 0 0-5.838 4.13 4.13 0 0 0-5.839 0l-1.24 1.241a1.138 1.138 0 0 1-1.607 0l-1.241-1.241a4.125 4.125 0 0 0-5.838 0 4.126 4.126 0 0 0 0 5.837.398.398 0 0 1 .022.024l7.86 8.321Z"
      fill="#6B6F7B"
    />
  </svg>
);

export default FavouriteIcon;
