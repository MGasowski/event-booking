import React from "react";

interface BadgeProps {
  title: string;
  color: string;
  className: string;
}

export const Badge = ({ title, color, className }: BadgeProps) => {
  return (
    <div
      className={`rounded-full flex items-center justify-center bg-${color} h-6 w-6 text-neutral-00 ${className}`}
    >
      {title}
    </div>
  );
};
