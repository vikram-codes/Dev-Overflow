import React from "react";
import Top from "./Top";
import Bottom from "./Bottom";

export default function LeftSidebar() {
  return (
    <div className="background-light900_dark200 pl-12 pr-10">
      <Top />
      <Bottom />
    </div>
  );
}
