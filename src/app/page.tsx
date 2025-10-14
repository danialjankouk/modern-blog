import React from "react";

const page = () => {
  return (
    <div className="bg-gray-900 min-h-screen py-20 items-center flex flex-col space-y-8">
      <h1 className="text-white font-bold text-xl">Blog management Application</h1>
      <div className="flex flex-col text-gray-500 text-lg">
        <p>
          This application allows users to create, edit, and delete blog posts.
        </p>
        <p>Users can also manage categories and tags for their posts. </p>
      </div>
      <div className="flex space-x-4">
        <button className="bg-blue-500 rounded-xl cursor-pointer text-white px-4 py-2">Management Blogs</button>
        <button className="bg-none border border-gray-400 rounded-xl cursor-pointer text-white px-4 py-2">Read Blogs</button>
      </div>
    </div>
  );
};

export default page;
