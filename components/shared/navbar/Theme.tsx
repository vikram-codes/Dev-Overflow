"use client";

import React from "react";

import { useTheme } from "@/context/ThemeProvider";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Image from "next/image";

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
            <MenubarItem>🌝 Light Theme</MenubarItem>
            <MenubarItem>🌚 Dark Theme</MenubarItem>
            <MenubarItem>🖥️ Device Theme</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
}
