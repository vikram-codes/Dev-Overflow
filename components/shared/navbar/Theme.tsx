"use client";

import React from "react";
import { themes } from "@/constants";
import { useTheme } from "@/context/ThemeProvider";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Image from "next/image";
import { validateHeaderName } from "http";

export default function Theme() {
  const { mode, setMode } = useTheme();

  return (
    <div>
      <Menubar className="relative border-none bg-transparent shadow-none">
        <MenubarMenu>
          <MenubarTrigger className="focus:bg-light-900 data-[state=open]:bg-light-900 dark:focus:bg-dark200 dark:data=[state=open]:bg-dark-200">
            {mode === "light" ? (
              <Image
                src="/assets/icons/sun.svg"
                width={20}
                height={20}
                alt="Sun"
                className="active-theme"
              />
            ) : (
              <Image
                src="/assets/icons/moon.svg"
                width={20}
                height={20}
                alt="Moon"
                className="active-theme"
              />
            )}
          </MenubarTrigger>
          <MenubarContent className="absolute right-[-3rem] mt-3 min-w-[120px] rounded border py-2 dark:border-dark-400 dark:bg-dark-300">
            {themes.map((theme) => (
              <MenubarItem
                key={theme.value}
                onClick={() => {
                  setMode(theme.value);
                  if (theme.value !== "system") {
                    localStorage.theme = theme.value;
                  } else {
                    localStorage.removeItem("theme");
                  }
                }}
                className="flex items-center gap-4 px-2.5 py-2 "
              >
                <Image
                  src={theme.icon}
                  width={20}
                  height={20}
                  alt={theme.label}
                />
                <span
                  className={`body-semibold text-light-500 ${mode === theme.value ? "text-primary-500" : "text-dark-100_light900"}`}
                >
                  {theme.label}
                </span>
              </MenubarItem>
            ))}
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
}
