import { FooterLink } from "./FooterLink";

interface FooterColumnProps {
  title: string;
  links: Array<{
    text: string;
    href: string;
  }>;
}

export const FooterColumn = ({ title, links }: FooterColumnProps) => {
  return (
    <div className="flex flex-col gap-2">
      <h3 className="text-white font-semibold mb-2">{title}</h3>
      {links.map((link) => (
        <FooterLink key={link.text} href={link.href}>
          {link.text}
        </FooterLink>
      ))}
    </div>
  );
};
