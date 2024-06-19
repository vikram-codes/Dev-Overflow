import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import Link from "next/link";

export default function MolbileNav() {
  return (
    <div>
      <Sheet>
        <SheetTrigger asChild>
          <Image
            src="/assets/icons/hamburger.svg"
            width={36}
            height={36}
            alt="Menu"
            className="invert-colors sm:hidden"
          />
        </SheetTrigger>
        <SheetContent
          side="left"
          className="background-light-900_dark200 border-none"
        >
          <Link href="/" className="flex items-center gap-1">
            <Image
              src="/assets/images/site-logo.svg"
              width={23}
              height={23}
              alt="Devf-Overflow Logo"
            />

            <p
              className="h2-bold text-dark-100 dark:text-light-900
            font-spaceGrotesk"
            >
              Dev
              <span className="text-primary-500 ">-Overflow</span>
            </p>
          </Link>
        </SheetContent>
      </Sheet>
    </div>
  );
}
