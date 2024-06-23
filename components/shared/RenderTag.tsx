import Link from "next/link";
import React from "react";

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
      {name} - {totalQuestions}
    </Link>
  );
}
