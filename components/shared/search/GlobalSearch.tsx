import Image from "next/image";
import React from "react";
import { Input } from "@/components/ui/input";

export default function GlobalSearch() {
  return (
    <div className="relative w-full max-w-[600px] max-sm:hidden">
      <div className="bacground-light800_darkgradient relative flex min-h-[56px] grow items-center gap-1 rounded-xl px-4">
        <Image
          src="/assets/icons/search.svg"
          width={20}
          height={20}
          alt="search icon"
          className="cursor-pointer"
        />
        <Input
          placeholder="Seach globally"
          type="text"
          value=""
          className="paragraph-regular no-focus border-none placeholder background-light800_darkgradient shadow-none outline-none "
        />
      </div>
    </div>
  );
}
