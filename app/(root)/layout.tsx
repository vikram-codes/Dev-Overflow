import { ReactNode } from "react";

import Navbar from "../../components/navigation/navbar";

function RootLayout({ children }: { chilren: ReactNode }) {
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
}

export default RootLayout;
