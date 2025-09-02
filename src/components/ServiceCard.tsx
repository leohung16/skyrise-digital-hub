type ServiceCardProps = {
  title: string;
  description: string;
  href?: string;
};

export default function ServiceCard({ title, description, href }: ServiceCardProps) {
  const Wrapper: React.ElementType = href ? "a" : "div";
  const wrapperProps: Record<string, string> = href
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper
      {...wrapperProps}
      className="rounded-xl border border-black/10 dark:border-white/10 p-5 hover:shadow-sm transition-shadow bg-white/50 dark:bg-white/5"
    >
      <h3 className="font-medium text-lg">{title}</h3>
      <p className="mt-2 text-sm text-black/70 dark:text-white/70">{description}</p>
    </Wrapper>
  );
}


