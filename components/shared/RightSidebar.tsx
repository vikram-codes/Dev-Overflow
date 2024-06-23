"use client";

import { sidebarLinks } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function RightSidebar() {
  const pathname = usePathname();
  return (
    <section className="flex background-light900_dark200 light-border right-0 top-0 flex-col h-screen justify-between gap-5 pt-36 p-6 border-r overflow-y-auto sticky dark:shadow-none max-sm:hidden w-[360px] custom-scrollbar ">
      <div>
        <h1 className="invert-colors text-dark300_light900 rounded-lg">
          Top Questions
        </h1>
        <Link href="/ask-question" className="text-dark300_light900">
          Questions
        </Link>
      </div>
      <div className="">
        <h1 className=" text-dark300_light900">Popular Tags</h1>
        <Link href="/ask-question" className="text-dark300_light900">
          Tags
        </Link>
      </div>
    </section>
  );
}
