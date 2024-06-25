import Filters from "@/components/shared/Filters";
import LocalSearch from "@/components/shared/search/LocalSearch";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  const filters = [
    { title: "Newest" },
    { title: "Recommended" },
    { title: "Frequent" },
    { title: "Unanswered" },
  ];

  return (
    <>
      <div className="flex w-full flex-col-reverse justify-between gap-4 sm:flex-row sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href="/ask-question" className="flex justify-end max-sm:w-full">
          <Button className="primary-gradient !text-light-900 py-3 px-4 min-h-[46px]">
            Ask a Question
          </Button>
        </Link>
      </div>
      <div className="mt-11 flex justify-between gap-5 max-sm:flex-col sm:items-center flex-col">
        <LocalSearch
          route="/"
          iconPosition="left"
          placeholder="Search questions..."
          imgSrc="/assets/icons/search.svg"
          otherClasses="flex-1"
        />
        <div className="flex max-md:hidden justify-between px-2 gap-7">
          {filters.map((title) => (
            <Badge
              key={title.title}
              className="subtle-medium background-light800_dark300 text-light400_light500 justify-start rounded-md border-none px-6 py-3 uppercase"
            >
              {title.title}
            </Badge>
          ))}
        </div>

        <div className="md:hidden">
          <Filters placeholder="Select a Filter" />
        </div>
      </div>
    </>
  );
}
