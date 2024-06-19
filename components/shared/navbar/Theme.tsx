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
          <MenubarTrigger>
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
          <MenubarContent>
            <MenubarItem>
              New Tab <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>New Window</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Share</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Print</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </div>
  );
}
