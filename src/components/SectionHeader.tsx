import { LucideIcon } from "lucide-react";

interface SectionHeaderProps {
  icon?: LucideIcon;
  title: string;
  description?: string;
}

const SectionHeader = ({ icon: Icon, title, description }: SectionHeaderProps) => {
  return (
    <div className="mb-8 text-center">
      {Icon && (
        <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent">
          <Icon className="h-7 w-7 text-accent-foreground" />
        </div>
      )}
      <h2 className="text-display-sm text-foreground md:text-display-md">{title}</h2>
      {description && (
        <p className="mx-auto mt-3 max-w-2xl text-lg text-muted-foreground">{description}</p>
      )}
    </div>
  );
};

export default SectionHeader;
