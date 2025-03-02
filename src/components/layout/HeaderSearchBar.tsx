"use client";
import Form from "next/form";
import React from "react";
import { FiSearch } from "react-icons/fi";

const HeaderSearchBar = () => {
  return (
    <Form action="/search">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-2 flex items-center pointer-events-auto">
          <FiSearch color="gray" />
        </div>
        <input
          type="text"
          name="query"
          placeholder="Search..."
          className="w-32 pl-8 pr-2 py-1 text-sm border border-gray-200 rounded-md focus:ring-1 focus:ring-black focus:border-transparent transition-colors"
        />
      </div>
    </Form>
  );
};

export default HeaderSearchBar;
