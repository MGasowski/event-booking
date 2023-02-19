import * as React from "react";
import { SVGProps } from "react";

const ListViewIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={24}
    height={23}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect x={9} width={15} height={5} rx={1} fill="#2B67F6" />
    <rect width={5} height={5} rx={1} fill="#2B67F6" />
    <rect x={9} y={9} width={15} height={5} rx={1} fill="#2B67F6" />
    <rect y={9} width={5} height={5} rx={1} fill="#2B67F6" />
    <rect x={9} y={18} width={15} height={5} rx={1} fill="#2B67F6" />
    <rect y={18} width={5} height={5} rx={1} fill="#2B67F6" />
  </svg>
);

export default ListViewIcon;
