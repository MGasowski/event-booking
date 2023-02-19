import React from "react";

interface FilterItemProps {
  title: string;
  Icon: React.FC;
  className: string;
}

export const FilterItem = ({ title, Icon, className }: FilterItemProps) => {
  return (
    <div
      className={`flex items-center border border-neutral-06 py-2 px-4 rounded-md w-min ${className}`}
    >
      <Icon />
      <span className="text-neutral-06 ml-1">{title}</span>
    </div>
  );
};
