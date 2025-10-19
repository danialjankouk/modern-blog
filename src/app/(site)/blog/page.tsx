import React from "react";
import Sidebar from "./sidebar";

const page = () => {
  return (
    <div className="bg-gray-900 min-h-screen flex flex-row justify-between p-10">
      <Sidebar />
      <div className="flex flex-row justify-between items-center">
        <select name="sort" id="sort" className="bg-white text-black p-2 rounded">
          <option value="latest">Latest</option>
          <option value="oldest">Oldest</option>
          <option value="most-popular">Most Popular</option>
        </select>
        <input type="search" name="search" id="search" className="bg-white text-black p-2 rounded" placeholder="Search..." />
      </div>
    </div>
  );
};

export default page;
