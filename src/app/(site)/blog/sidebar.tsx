import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="flex flex-col items-end">
      <h1 className="text-xl text-white">Category</h1>
      <ul className="flex flex-col justify-baseline text-gray-400 space-y-4 mt-4">
        <li>All</li>
        <li>sport</li>
        <li>culture</li>
        <li>economy</li>
        <li>programming</li>
        <li>politic</li>
        <li>history</li>
        <li>geography</li>
      </ul>
    </div>
  );
};

export default Sidebar;
