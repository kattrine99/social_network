import { ClassAttributes, AnchorHTMLAttributes, Key } from "react";
import { JSX } from "react/jsx-runtime";
import { listlinks } from "../constants/Constants"

export const LinksList = (props: JSX.IntrinsicAttributes & ClassAttributes<HTMLAnchorElement> & AnchorHTMLAttributes<HTMLAnchorElement>) => {
    return (
            listlinks.map((link: { className: string; href: string | undefined; src: string | undefined; alt: string | undefined; }, index: Key | null | undefined) => (
                <a key={index} className={`reg__link ${link.className}`} href={link.href} {...props}>
                    <img src={link.src} alt={link.alt} />
                </a>
            ))
         );
}