import * as React from "react";
import { SVGProps } from "react";

const PriceTag = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={18}
    height={18}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.5 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3Z"
      stroke="#6B6F7B"
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
    <path
      d="M17 1.91a.909.909 0 0 0-.91-.91h-5.409c-.483 0-.946-.025-1.214.244L1.202 9.508a.687.687 0 0 0 0 .973l6.317 6.318a.688.688 0 0 0 .973 0l8.264-8.265c.269-.268.243-.72.243-1.215L17 1.909Z"
      stroke="#6B6F7B"
      strokeMiterlimit={10}
      strokeLinecap="round"
    />
  </svg>
);

export default PriceTag;
