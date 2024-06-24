"use client";

import Link from "next/link";
import Image from "next/image";
import React from "react";
import RenderTag from "./RenderTag";

export default function RightSidebar() {
  const hotQuestions = [
    {
      _id: 1,
      title: "How to use Next.js with Tailwind CSS?",
    },
    {
      _id: 2,
      title: "How to use React Query with Next.js?",
    },
    {
      _id: 3,
      title: "How to deploy a Next.js app to Vercel?",
    },
    {
      _id: 4,
      title: "What are the best practices for React component naming?",
    },
    {
      _id: 5,
      title: "How to optimize performance in a React app?",
    },
  ];

  const popularTags = [
    {
      _id: 1,
      name: "React",
      totalQuestions: 10,
    },
    {
      _id: 2,
      name: "JavaScript",
      totalQuestions: 8,
    },
    {
      _id: 3,
      name: "TypeScript",
      totalQuestions: 6,
    },
    {
      _id: 4,
      name: "Next.js",
      totalQuestions: 5,
    },
    {
      _id: 5,
      name: "CSS",
      totalQuestions: 4,
    },
  ];

  return (
    <section className="background-light900_dark200 light-border custom-scrollbar sticky right-0 top-0 flex h-screen w-[350px] flex-col overflow-y-auto border-l p-6 pt-36 shadow-light-300 dark:shadow-none max-xl:hidden">
      <div>
        <h3 className="h3-bold text-dark200_light900 mt-10">Top Questions</h3>
        {hotQuestions.map((question, index) => (
          <div key={index} className="flex flex-col gap-2 mt-4">
            <Link
              href={`/ask-question/${question._id}`}
              className="text-dark300_light900 flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium">{question.title}</p>
              <Image
                src="/assets/icons/chevron-right.svg"
                alt="Chevron Right"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          </div>
        ))}
      </div>
      <div className="mt-16 text-dark200_light900">
        <h3 className="h3-bold mt-10">Popular Tags</h3>
        <div className="">
          {popularTags.map((tag) => (
            <RenderTag
              key={tag._id}
              _id={tag._id}
              name={tag.name}
              totalQuestions={tag.totalQuestions}
              showCount
            />
          ))}
        </div>
      </div>
    </section>
  );
}
