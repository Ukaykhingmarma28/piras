import Topbar from "@/components/Topbar";
import { Figtree } from "next/font/google";
import type { ReactNode } from "react";

const figtree = Figtree({
  variable: "--font-figtree",
  subsets: ["latin"],
});

export default function Layout({ children }: { children: ReactNode }) {
  return (
    <div className={figtree.variable}>
      <Topbar />
      <main>{children}</main>
    </div>
  );
}
