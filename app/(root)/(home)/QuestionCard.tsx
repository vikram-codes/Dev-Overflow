"use client";
import { Badge } from "@/components/ui/badge";
import React from "react";

interface Question {
  question: string;
  tags: string[];
  votes: number;
  answers: number;
  views: number;
  askedBy: string;
  askedDate: string;
}

const dummyQuestion: Question[] = [
  {
    question:
      "Best practices for data fetching in a Next.js application with Server-Side Rendering (SSR)?",
    tags: ["NEXT.js"],
    votes: 200,
    answers: 40,
    views: 390,
    askedBy: "Sujata | JS Mastery",
    askedDate: "2021-10-10",
  },
  {
    question: "Redux Toolkit Not Updating State as Expected",
    tags: ["React.js", "Redux"],
    votes: 150,
    answers: 30,
    views: 250,
    askedBy: "Sujata | JS Mastery",
    askedDate: "2021-10-15",
  },
  {
    question: "Async/Await Function Not Handling Errors Properly",
    tags: ["javascript"],
    votes: 180,
    answers: 35,
    views: 300,
    askedBy: "Sujata | JS Mastery",

    askedDate: "2021-10-20",
  },
];

export default function QuestionCard() {
  return (
    <>
      {dummyQuestion.map((question) => (
        <div className="background-light900_dark200 shadow-md p-6 pl-10 text-dark300_light700 mt-11 rounded-md">
          <div className="flex justify-between items-center">
            <h3 className="h3-bold py-1 text-dark900_light300 px-1">
              {question.question}
            </h3>
          </div>
          <div className="flex items-center gap-2 my-3">
            {question.tags.map((tag) => (
              <Badge className="subtle-medium background-light800_dark300 text-light400_light500 rounded-md border-none px-4 py-2 uppercase">
                {tag}
              </Badge>
            ))}
          </div>
          <div className="flex justify-between">
            <div className="flex items-center gap-2 mt-2">
              <span>
                <img
                  src="/assets/icons/avatar.svg"
                  alt="Account"
                  className="w-4 h-4"
                />
              </span>
              <span className="text-sm text-dark100_light700">
                {question.askedBy}
              </span>
              <span className="text-xs text-dark100_light700">
                • asked {question.askedDate}
              </span>
            </div>
            <div className="flex items-center gap-4 text-xs">
              <div className="flex items-center gap-1">
                <img
                  src="/assets/icons/like.svg"
                  alt="Votes"
                  className="w-4 h-4"
                />
                <span>{question.votes} Votes</span>
              </div>
              <div className="flex items-center gap-1">
                <img
                  src="/assets/icons/message.svg"
                  alt="Answers"
                  className="w-4 h-4"
                />
                <span>{question.answers} Answers</span>
              </div>
              <div className="flex items-center gap-1">
                <img
                  src="/assets/icons/eye.svg"
                  alt="Views"
                  className="w-4 h-4"
                />
                <span>{question.views} Views</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
