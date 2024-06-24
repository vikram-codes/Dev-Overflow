import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex justify-between">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Link href="/ask-question">
          <Button className="primary-gradient !text-light-900 py-3 px-4 min-h-[46px]">
            Ask a Question
          </Button>
        </Link>
      </div>
    </>
  );
}
