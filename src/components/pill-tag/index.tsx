import React from "react";
interface PillTagProps {
  title?: string;
  color?: string;
  background?: string;
}

export const PillTag = ({ title, color, background }: PillTagProps) => {
  return (
    <div className=" mt-3 text-xs font-semibold inline-block w-min py-2 px-4 rounded-full text-green-400 bg-green-100 uppercase last:mr-0 mr-1">
      {title}
    </div>
  );
};
