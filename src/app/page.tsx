"use client";
import Image from "next/image";
import Mainpage from "../components/Mainpage";
import Headbar from "@/components/Headbar";

export default function Home() {
  return (
    <div>
      <Headbar></Headbar>
      <main className="min-h-screen flex-col items-center p-24">
        <Mainpage></Mainpage>
      </main>
    </div>
  );
}
