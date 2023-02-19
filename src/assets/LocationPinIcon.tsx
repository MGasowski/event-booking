import * as React from "react";
import { SVGProps } from "react";

const LocationPinIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={12}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6 0C2.692 0 0 2.697 0 6.013c0 5.33 5.399 9.527 5.629 9.703L6 16l.371-.284C6.601 15.54 12 11.344 12 6.013 12 2.697 9.308 0 6 0Zm0 14.434c-1.183-1.02-4.778-4.447-4.778-8.421A4.788 4.788 0 0 1 6 1.225c2.634 0 4.777 2.148 4.777 4.788 0 3.965-3.595 7.4-4.777 8.421Z"
      fill="#333"
    />
    <path
      d="M6.107 9A2.98 2.98 0 0 1 3.13 6.023a2.98 2.98 0 0 1 2.977-2.976 2.98 2.98 0 0 1 2.977 2.976A2.98 2.98 0 0 1 6.107 9Zm0-4.977c-1.103 0-2 .897-2 2s.897 2 2 2 2-.897 2-2-.897-2-2-2Z"
      fill="#333"
    />
  </svg>
);

export default LocationPinIcon;
