interface FooterLinkProps {
  href: string;
  children: React.ReactNode;
}

export const FooterLink = ({ href, children }: FooterLinkProps) => {
  return (
    <a href={href} className="text-gray-300 hover:text-white transition-colors">
      {children}
    </a>
  );
};
