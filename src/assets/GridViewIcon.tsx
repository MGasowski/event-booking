import * as React from "react";
import { SVGProps } from "react";

const GridViewIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={24}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={10} height={10} rx={1} fill="#6B6F7B" />
    <rect x={14} y={14} width={10} height={10} rx={1} fill="#6B6F7B" />
    <rect x={14} width={10} height={10} rx={1} fill="#6B6F7B" />
    <rect y={14} width={10} height={10} rx={1} fill="#6B6F7B" />
  </svg>
);

export default GridViewIcon;
