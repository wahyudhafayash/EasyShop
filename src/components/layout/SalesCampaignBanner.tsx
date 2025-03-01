"use client";
import { useRouter } from "next/navigation";
import React from "react";

const SalesCampaignBanner = () => {
  const router = useRouter();

  return (
    <div className="w-full bg-gradient-to-r from-black via-gray-700 to-black py-3 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 sm:gap-6 text-white">
          <div className="flex items-center gap-2">
            <span className="text-xl sm:text-2xl font-bold animate-bounce">
              🔥
            </span>
            <div className="text-sm sm:text-base font-bold">
              FLASH SALE ENDS IN:
            </div>
            <div className="bg-white/40 rounded px-2 py-1 font-mono font-bold">
              23:59:59
            </div>

            <div className="flex items-center gap-2 ml-2">
              <span className="font-bold text-orange-400 animate-pulse">
                UP TO 9% OFF!
              </span>
            </div>
          </div>

          <button
            className="bg-white text-black px-4 py-1 rounded-full font-bold text-sm hover:bg-gray-200 transition-colors shadow-lg cursor-pointer"
            onClick={() => {
              router.push("/product");
            }}
          >
            SHOP NOW!
          </button>
        </div>
      </div>
    </div>
  );
};

export default SalesCampaignBanner;
