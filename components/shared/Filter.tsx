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
        <SelectTrigger className="w-[180px]">
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
