import { SignedOut } from "@clerk/nextjs";
import React from "react";

export default function Bottom() {
  return (
    <div>
      <SignedOut>{/* <div>You are Si</div> */}</SignedOut>
    </div>
  );
}
