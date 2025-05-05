"use client";
import { forwardRef } from "react";
import HTMLFlipBook from "react-pageflip";
import Image from "next/image";

const Page = forwardRef<HTMLDivElement, { image: string; page: number }>(
  ({ image, page }, ref) => {
    return (
      <div
        ref={ref}
        className="bg-white items-center justify-center !flex"
      >
        <Image
          src={image}
          width={500}
          height={600}
          alt={`Page ${page + 1}`}
        />
      </div>
    );
  }
);
Page.displayName = "Page"; // Required for forwardRef

export default function Home() {
  return (
    <div className="mt-[100px]">
      <div className="flex items-center justify-center">
        {/*@ts-ignore */}
        <HTMLFlipBook
          width={500}
          height={500}
          className="overflow-hidden"
        >
          {Array.from({ length: 25 }, (_, i) => i + 1).map((image, index) => (
            <Page
              key={index}
              image={`/book/3 братчета-${(index)
                .toString()
                .padStart(2, "0")}.png`}
              page={index}
            />
          ))}
        </HTMLFlipBook>
      </div>
      <div className="flex items-center justify-center mt-[100px]">
        {/*@ts-ignore */}
        <HTMLFlipBook
          width={500}
          height={700}
          autoSize
          className="overflow-hidden"
        >
          {Array.from({ length: 4 }, (_, i) => i + 1).map((image, index) => (
            <Page
              key={index}
              image={`/book2/${index}.jpg`}
              page={index}
            />
          ))}
        </HTMLFlipBook>
      </div>
    </div>
  );
}
