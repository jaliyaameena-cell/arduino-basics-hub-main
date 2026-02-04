import { Card, CardContent } from "@/components/ui/card";

interface PartCardProps {
  name: string;
  imageSrc: string;
  description?: string;
}

const PartCard = ({ name, imageSrc, description }: PartCardProps) => {
  return (
    <Card className="overflow-hidden border-border/50">
      <div className="aspect-square overflow-hidden bg-secondary">
        <img
          src={imageSrc}
          alt={name}
          className="h-full w-full object-cover"
        />
      </div>
      <CardContent className="p-4 text-center">
        <h4 className="font-medium text-foreground">{name}</h4>
        {description && (
          <p className="mt-1 text-xs text-muted-foreground">{description}</p>
        )}
      </CardContent>
    </Card>
  );
};

export default PartCard;
