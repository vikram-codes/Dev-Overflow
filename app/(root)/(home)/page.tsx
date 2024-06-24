import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <>
      <div className="flex justify-between">
        <h1 className="h1-bold text-dark300_light900">All Questions</h1>
        <Button className="primary-gradient text-light-900 w-36 p-[-2px] pt-6 pb-6 ml-48">
          Ask a Question
        </Button>
      </div>
    </>
  );
}
