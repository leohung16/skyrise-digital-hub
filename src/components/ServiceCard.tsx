type ServiceCardProps = {
  title: string;
  description: string;
  href?: string;
};

export default function ServiceCard({ title, description, href }: ServiceCardProps) {
  const Wrapper = href ? "a" : ("div" as const);
  const wrapperProps = href
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Wrapper
      {...(wrapperProps as any)}
      className="rounded-xl border border-black/10 dark:border-white/10 p-5 hover:shadow-sm transition-shadow bg-white/50 dark:bg-white/5"
    >
      <h3 className="font-medium text-lg">{title}</h3>
      <p className="mt-2 text-sm text-black/70 dark:text-white/70">{description}</p>
    </Wrapper>
  );
}


