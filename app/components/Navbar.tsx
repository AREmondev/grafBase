import { NavLinks } from "@/constants";
import AuthProvider from "./AuthProvider";
import Image from "next/image";
import Link from "next/link";
import React from "react";

function Navbar() {
  const seassion = true;
  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={115} height={43} />
        </Link>
        <ul className="xl:flex hidden gap-7 text-small">
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.href}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>
      <div className="flexCenter gap-5">
        {seassion ? (
          <>
            <span>UserPhoto</span>
            <Link href="/create-project">Share Work</Link>
          </>
        ) : (
          <AuthProvider />
        )}
      </div>
    </nav>
  );
}

export default Navbar;
