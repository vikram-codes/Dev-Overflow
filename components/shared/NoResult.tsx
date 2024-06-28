import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

interface Props {
  title: string;
  description: string;
}

export default function NoResult({ title, description }: Props) {
  return (
    <div className="text-dark100_light700 mt-10 flex w-full flex-col items-center justify-center">
      <Image
        src="/assets/images/light-illustration.png"
        alt="No result illustration"
        width={270}
        height={200}
        className="block object-contain dark:hidden"
      />
      <Image
        src="/assets/images/dark-illustration.png"
        alt="No result illustration"
        width={270}
        height={200}
        className="hidden object-contain dark:flex"
      />
      <h2 className="h2-bold text-dark200_light900 items-center mt-8">
        {title}
      </h2>
      <p className="body-regular text-dark500_light700 text-center my-3.5 max-w-md">
        {description}
      </p>
      <Link href="/ask-question" className="flex justify-end max-sm:w-full">
        <Button className="paragraph-medium mt-5 min-h-[46px] rounded-lg bg-primary-500 px-4 py-3 text-light-900 hover:bg-primary-500 dark:bg-primary-500 dark:text-light-900">
          Ask a Question
        </Button>
      </Link>
    </div>
  );
}
