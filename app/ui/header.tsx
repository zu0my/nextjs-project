"use client";

import type { Dispatch, SetStateAction } from "react";
import { cn } from "@/app/lib/utils";

const Header = ({
  collapsed,
  setCollapsed,
}: {
  collapsed: boolean;
  setCollapsed: Dispatch<SetStateAction<boolean>>;
}) => {
  const handleCollapse = () => {
    setCollapsed((prev) => !prev);
  };

  return (
    <div className="px-5 pt-4 pb-2 flex items-center gap-3 border-b border-gray-300">
      <button
        type="button"
        onClick={handleCollapse}
        className={cn("transition-all", collapsed && "rotate-180")}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <title>collapse</title>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75"
          />
        </svg>
      </button>

      <div>header</div>
    </div>
  );
};

export default Header;
