import { getAllCategories } from "@/sanity/lib/client";
import Link from "next/link";
import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const HeaderCategorySelector = async () => {
  const categories = await getAllCategories();

  return (
    <div className="relative inline-block">
      <button className="peer group text-gray-700 hover:text-gray-900 text-sm font-medium flex items-center gap-1 cursor-pointer">
        Categories
        <span className="transtion-transform duration-200 group-hover:rotate-180">
          <IoIosArrowDown size={18} />
        </span>
      </button>

      <div className="absolute top-full left-0 pt-2 opacity-0 invisible peer-hover:opacity-100 peer-hover:visible hover:opacity-100 hover:visible transition-all duration-100">
        <div className="w-64 bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden">
          <div className="py-2">
            {categories.map((category) => (
              <Link
                key={category._id}
                href={`/category/${category.slug?.current}`}
                prefetch
                className="block px-4 py-2 text-sm text-gray-700 hover:text-gray-900 transition-colors duration-100"
              >
                {category.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderCategorySelector;
