import { AlertTriangle, CheckCircle } from "lucide-react";

interface MistakeCardProps {
  mistake: string;
  fix: string;
}

const MistakeCard = ({ mistake, fix }: MistakeCardProps) => {
  return (
    <div className="rounded-lg border bg-card p-4">
      <div className="mb-3 flex items-start gap-2">
        <AlertTriangle className="mt-0.5 h-5 w-5 shrink-0 text-warning" />
        <p className="font-medium text-foreground">{mistake}</p>
      </div>
      <div className="flex items-start gap-2 pl-7">
        <CheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-success" />
        <p className="text-muted-foreground">{fix}</p>
      </div>
    </div>
  );
};

export default MistakeCard;
