"use client";

import { sidebarLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function RightSidebar() {
  const pathname = usePathname();
  return (
    <section className="flex background-light900_dark200 light-border right-0 top-0 flex-col h-screen justify-between gap-5 pt-36 p-12 border-r overflow-y-auto sticky dark:shadow-none custom-scrollbar max-lg:hidden">
      <div>
        {sidebarLinks.map((item) => {
          const isActive =
            (pathname.includes(item.route) && item.route.length > 1) ||
            pathname === item.route;
          return (
            <Link
              href={item.route}
              className={`${
                isActive
                  ? "primary-gradient rounded-lg text-light-900"
                  : "text-dark300_light900"
              } flex items-center justify-start gap-4 bg-transparent p-4`}
              key={item.route}
            >
              <img
                src={item.imgURL}
                alt={item.label}
                width={20}
                height={20}
                className={`${isActive ? "" : "invert-colors"}`}
              />
              <p className={`${isActive ? "base-bold" : "base-medium"} `}>
                {item.label}
              </p>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
