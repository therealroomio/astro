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
        "grid md:auto-rows-[minmax(0,1fr)] grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl mx-auto",
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
        "group/bento row-span-1 rounded-xl p-6 bg-white/50 backdrop-blur-sm border border-border transition duration-300 hover:shadow-lg hover:shadow-primary/5 hover:border-primary/20",
        className
      )}
    >
      {header}
      <div className="flex flex-col h-full">
        {icon && <div className="mb-4 text-3xl">{icon}</div>}
        {title && (
          <h3 className="text-xl font-semibold text-foreground mb-2 group-hover/bento:text-primary transition-colors">
            {title}
          </h3>
        )}
        {description && (
          <p className="text-foreground/70 group-hover/bento:text-foreground/80 transition-colors">
            {description}
          </p>
        )}
        {children}
      </div>
    </div>
  );
};
