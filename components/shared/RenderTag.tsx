import Link from "next/link";
import React from "react";
import { Badge } from "../ui/badge";

interface Props {
  _id: number;
  name: string;
  totalQuestions: number;
  showCounts?: boolean;
}

export default function RenderTag({
  _id,
  name,
  totalQuestions,
  showCounts,
}: Props) {
  return (
    <Link href={`/tags/${_id}`} className="justify-between flex gap-2">
      <Badge className="subtle-medium background-light800_dark300 text-light400_light500 rounded-md border-none px-4 py-2 uppercase">
        {name}
      </Badge>

      {showCounts && (
        <p className="small-medium text-dark500_light700">{totalQuestions}</p>
      )}
    </Link>
  );
}
