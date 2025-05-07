"use client";
import { useRouter } from "next/navigation";
import React, { SetStateAction, useState } from "react";
const pages = ["About", "Products", "Contact", "FAQ", "Blog"];

export default function NavBar() {
  const [active, setActive] = useState<string>("");

  return (
    <nav className="flex justify-evenly h-[70px] items-center">
      <button>
        <img
          src="#"
          alt="logo"
        />
      </button>
      {pages.map((button) => (
        <NavBarButton
          key={button}
          label={button}
          link={button.toLowerCase()}
          active={active}
          setActive={setActive}
        />
      ))}
    </nav>
  );
}

function NavBarButton({
  label,
  link,
  active,
  setActive,
}: {
  label: string;
  link: string;
  active: string;
  setActive: React.Dispatch<SetStateAction<string>>;
}) {
  const router = useRouter();

  return (
    <button
      className={`border-b-[1px] ${
        active === label ? "border-[green]" : "border-[white]"
      } hover:border-b-[1px] hover:border-[green] outline-white cursor-pointer w-[150px]`}
      onClick={() => {
        router.push("/" + link);
        setActive(label);
      }}
    >
      {label}
    </button>
  );
}
