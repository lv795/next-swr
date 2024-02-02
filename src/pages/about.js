import Image from "next/image";
import { Inter } from "next/font/google";
import List from "@/components/List";
import Nav from "@/components/Nav";

const inter = Inter({ subsets: ["latin"] });

export default function Index() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1>About Page </h1>

      <Nav />
      <List />
    </main>
  );
}
