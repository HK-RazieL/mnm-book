"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Products() {
  return (
    <div className="p-6 sm:p-10">
      <ProductButton
        image="/book/3 братчета-01-small.png"
        label="3 братчета"
        link="/1"
      />
    </div>
  );
}

function ProductButton({
  label,
  image,
  link,
}: {
  label: string;
  image: string;
  link: string;
}) {
  const router = useRouter();

  return (
    <button onClick={() => router.push(`/products/${link}`)}>
      <Image
        src={image}
        alt={label}
        height={250}
        width={250}
        className="bg-white shadow-md hover:shadow-xl cursor-pointer"
      ></Image>
    </button>
  );
}
