import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface SensorCardProps {
  title: string;
  description: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
}

const SensorCard = ({ title, description, imageSrc, imageAlt, href }: SensorCardProps) => {
  return (
    <Card className="group overflow-hidden border-border/50 transition-all hover:border-primary/50 hover:shadow-lg">
      <div className="aspect-[4/3] overflow-hidden bg-secondary">
        <img
          src={imageSrc}
          alt={imageAlt}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardContent className="p-6">
        <h3 className="mb-2 text-xl font-semibold text-foreground">{title}</h3>
        <p className="mb-4 text-sm text-muted-foreground">{description}</p>
        <Button asChild className="w-full gap-2">
          <Link to={href}>
            Start Tutorial
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardContent>
    </Card>
  );
};

export default SensorCard;
