import { Card, CardContent } from "@/components/ui/card";
import { LucideIcon } from "lucide-react";

interface InfoCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  children?: React.ReactNode;
}

const InfoCard = ({ icon: Icon, title, description, children }: InfoCardProps) => {
  return (
    <Card className="border-border/50 bg-card transition-shadow hover:shadow-md">
      <CardContent className="flex flex-col items-center p-6 text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent">
          <Icon className="h-8 w-8 text-accent-foreground" />
        </div>
        <h3 className="mb-2 text-lg font-semibold text-foreground">{title}</h3>
        <p className="mb-4 text-sm text-muted-foreground">{description}</p>
        {children}
      </CardContent>
    </Card>
  );
};

export default InfoCard;
