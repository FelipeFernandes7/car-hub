import Image from "next/image";
import Link from "next/link";
import logo from "../../public/logo.svg";

import { footerLinks } from "@/constants";
export function Footer() {
  return (
    <footer className="footer bg-gray-950">
      <div className="footer__links-container">
        <div className="flex flex-col justify-start items-start gap-6">
          <Image
            src={logo}
            alt={"hub car logo"}
            width={118}
            height={18}
            className="object-contain"
          />
          <p className="text-base text-gray-300">
            carhub 2023 All Rights Reserved &copy;
          </p>
        </div>
        <div className="footer__links">
          {footerLinks.map((link) => (
            <div key={link.title} className="footer__link">
              <h3 className="font-bold">{link.title}</h3>
              {link.links.map((item) => (
                <Link
                  key={item.title}
                  href={item.url}
                  className="text-gray-500"
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div
        className="flex justify-between items-center 
        flex-wrap mt-10 border-t
        border-gray-900 
        sm:px-16 px-6 py-10"
      >
        <p>@2023 carhub. All Rights Reserved &copy;</p>
        <div className="footer__copyrights-link">
          <Link href={"/"} className="text-gray-500">
            Privacy policy
          </Link>
          <Link href={"/"} className="text-gray-500">
            Terms of use
          </Link>
        </div>
      </div>
    </footer>
  );
}
