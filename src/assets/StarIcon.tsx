import * as React from "react";

const StarIcon = ({ active }) => (
  <svg width={20} height={20} fill="none">
    <path
      d="m10.795 2.43 1.656 4.555 4.867.159a.547.547 0 0 1 .32.98l-3.842 2.97 1.353 4.65a.547.547 0 0 1-.832.606l-4.027-2.716-4.026 2.716a.547.547 0 0 1-.832-.605l1.353-4.651-3.858-2.97c-.409-.311-.192-.964.32-.98l4.866-.16L9.77 2.43c.168-.478.849-.478 1.025 0Z"
      fill="#2B67F6"
      fillOpacity={active ? 1 : 0.16}
    />
  </svg>
);

export default StarIcon;
