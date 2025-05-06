"use client";
import Image from "next/image";
import { forwardRef } from "react";
import HTMLFlipBook from "react-pageflip";
import { useMediaQuery } from "usehooks-ts";

const Page = forwardRef<
  HTMLDivElement,
  { image: string; page: number; isMobile: boolean }
>(({ image, page, isMobile }, ref) => {
  return (
    <div
      ref={ref}
      className={`bg-white items-center justify-center`}
      style={{
        willChange: "transform",
        transform: "translateZ(0)",
        backfaceVisibility: "hidden",
        perspective: 1000,
      }}
    >
      {image && (
        <Image
          src={image}
          width={isMobile ? 250 : 500}
          height={isMobile ? 250 : 600}
          alt={`Page ${page + 1}`}
          priority
          style={{ objectFit: "contain" }}
        />
      )}
    </div>
  );
});
Page.displayName = "Page"; // Required for forwardRef

export default function Home() {
  const isMobile = useMediaQuery("(max-width: 440px)");
  return (
    <div className="md:mt-[100px]">
      <div>
        {/* @ts-expect-error asdf */}
        <HTMLFlipBook
          width={isMobile ? 250 : 500}
          height={isMobile ? 250 : 500}
          size="fixed"
          className="mx-auto outline [&_stf__block]:!h-[500px]"
        >
          {Array.from({ length: 25 }, (_, i) => i).map((image, index) =>
            index === 0 ? (
              <Page
                key={index}
                image={""}
                page={index}
                isMobile={isMobile}
              />
            ) : (
              <Page
                key={index}
                image={`/book/3 братчета-${index.toString().padStart(2, "0")}${
                  isMobile ? "-small" : ""
                }.png`}
                page={index}
                isMobile={isMobile}
              />
            )
          )}
        </HTMLFlipBook>
      </div>
    </div>
  );
}
