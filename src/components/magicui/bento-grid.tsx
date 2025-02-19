import { cn } from "@/utils/cn";

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "mx-auto grid max-w-7xl grid-cols-1 gap-4 md:auto-rows-[minmax(0,1fr)] md:grid-cols-3",
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  children,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        "group/bento row-span-1 rounded-xl border border-border bg-white/50 p-6 backdrop-blur-sm transition duration-300 hover:border-primary/20 hover:shadow-lg hover:shadow-primary/5",
        className
      )}
    >
      {header}
      <div className="flex h-full flex-col">
        {icon && <div className="mb-4 text-3xl">{icon}</div>}
        {title && (
          <h3 className="mb-2 text-xl font-semibold text-foreground transition-colors group-hover/bento:text-primary">
            {title}
          </h3>
        )}
        {description && (
          <p className="text-foreground/70 transition-colors group-hover/bento:text-foreground/80">
            {description}
          </p>
        )}
        {children}
      </div>
    </div>
  );
};
