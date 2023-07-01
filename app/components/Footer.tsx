import { footerLinks } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import React from "react";
type columnProps = {
  title: string;
  links: string[];
};
const FooterCoulmn = ({ title, links }: columnProps) => (
  <div className="footer_column ">
    <h4 className="font-semibold">{title}</h4>
    <ul className="flex flex-col gap-2 font-normal">
      {links.map((link) => (
        <Link href={link} key={link}>
          {link}
        </Link>
      ))}
    </ul>
  </div>
);

function Footer() {
  return (
    <footer className="flexStart footer">
      <div className="flex flex-col gap-12 w-full">
        <div className="flex items-start flex-col">
          <Image src="/logo-purple.svg" alt="logo" width={115} height={38} />
          <p className="text-start text-sm font-normal mt-5 max-w-xs">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          </p>
        </div>
        <div className="flex flex-wrap gap-12">
          {footerLinks.map((column) => (
            <FooterCoulmn
              title={column.title}
              links={column.links}
              key={column.title}
            />
          ))}
        </div>
      </div>
      <div className="flexBetween footer_copyright">
        <p>@ 2023 Emon. All Right Reserved</p>
        <div className="text-gray flexCenter gap-1">
          <span className="text-black font-semibold">10,214</span>
          <span>Project Submited</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
