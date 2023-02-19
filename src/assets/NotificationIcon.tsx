import * as React from "react";
import { SVGProps } from "react";

const NotificationIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={29}
    height={28}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.311 6.409V4.053a1.137 1.137 0 0 1 2.274 0V6.41a7.957 7.957 0 0 1 6.821 7.876v4.28l.92 1.84a2.841 2.841 0 0 1-2.542 4.112h-5.2a1.138 1.138 0 0 1-2.273 0H8.112a2.842 2.842 0 0 1-2.542-4.113l.92-1.84v-4.279A7.959 7.959 0 0 1 13.31 6.41Zm1.137 2.192a5.684 5.684 0 0 0-5.684 5.684v4.548c0 .176-.043.35-.121.508l-1.04 2.08a.57.57 0 0 0 .51.823h12.67a.57.57 0 0 0 .51-.823l-1.041-2.08a1.144 1.144 0 0 1-.12-.508v-4.548a5.683 5.683 0 0 0-5.684-5.684Z"
      fill="#2B67F6"
    />
  </svg>
);

export default NotificationIcon;
