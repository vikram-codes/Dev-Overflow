"use client";

import { sidebarLinks } from "@/constants";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { SignedOut } from "@clerk/nextjs";
import { Button } from "@/components/ui/button";

export default function Top() {
  const pathname = usePathname();
  return (
    <section className="flex h-full flex-col gap-5 pt-32 sticky">
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
            <p className={`${isActive ? "base-bold" : "base-medium"}`}>
              {item.label}
            </p>
          </Link>
        );
      })}
      {/* <SignedOut>
        <div className="flex flex-col gap-3 mt-6">
          <Link href="/sign-in">
            <Button className="small-medium btn-secondary min-h-[41px] w-full rounded-lg px-4 py-3 shadow-none">
              <span className="primary-text-gradient">Log In</span>
            </Button>
          </Link>

          <Link href="/sign-up">
            <Button className="small-medium light-border-2 btn-tertiary text-dark400_light900 min-h-[41px] w-full rounded-lg border px-4 py-3 shadow-none">
              Sign Up
            </Button>
          </Link>
        </div>
      </SignedOut> */}
    </section>
  );
}
