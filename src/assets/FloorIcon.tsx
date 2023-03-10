import * as React from "react";
import { SVGProps } from "react";

const FloorIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={16}
    height={16}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M15.127 11.944h-2.13c-.877 0-1.031-.63-1.053-.946V8.917c0-.876-.74-.95-.954-.954H8.923c-.882 0-.956-.755-.96-.951V4.996c0-.86-.623-.997-.913-1.015H4.972c-.991 0-.99-.914-.99-.914V.836C3.964.57 3.826 0 2.959 0H.892C.092 0 .006.583 0 .795v14.117s-.046.984 1.022.984h13.82c.865 0 1.05-.487 1.083-.783v-2.1c0-.847-.49-1.035-.798-1.07Zm-.209 2.224c-.005.19-.092.736-.958.736H1.962c-.69 0-.86-.397-.895-.675V1.858c0-.72.45-.848.685-.866h.567c.166.007.701.105.701 1.057v1.38c.002.216.078 1.401 1.455 1.407h1.437c.226.007.953.105.953 1.072V7.42c.02.424.222 1.524 1.748 1.524h1.122s1.034-.006 1.034 1.129v1.351c.003.18.081 1.619 1.902 1.609h1.252c.202.005.994.074.995.9v.235Z"
      fill="#6B6F7B"
    />
  </svg>
);

export default FloorIcon;
