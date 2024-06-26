"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props {
  placeholder: string;
  icon: string;
  otherClasses?: string;
  containerClasses?: string;
  filters: {
    name: string;
    value: string;
  }[];
}

export default function Filters({
  placeholder,
  filters,
  otherClasses,
  containerClasses,
}: Props) {
  return (
    <div className={`relative ${otherClasses}`}>
      <Select>
        <SelectTrigger
          className={`${otherClasses}
        body-regular light-border background-light800_dark300 text-dark500_light700 border px-5 py-2.5 `}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="light">Light</SelectItem>
          {/* <SelectItem value="dark">Dark</SelectItem>
        <SelectItem value="system">System</SelectItem> */}
        </SelectContent>
      </Select>
    </div>
  );
}
