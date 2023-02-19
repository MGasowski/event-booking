import * as React from "react";
import { SVGProps } from "react";

const Separator = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={2}
    height={56}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect
      x={0.232}
      y={0.974}
      width={0.974}
      height={54.571}
      rx={0.487}
      fill="#6B6F7B"
    />
  </svg>
);

export default Separator;
