interface StepCardProps {
  stepNumber: number;
  title: string;
  description: string;
  imageSrc?: string;
  imageAlt?: string;
}

const StepCard = ({ stepNumber, title, description, imageSrc, imageAlt }: StepCardProps) => {
  return (
    <div className="flex gap-4 rounded-lg border bg-card p-4 md:gap-6 md:p-6">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground md:h-12 md:w-12">
        {stepNumber}
      </div>
      <div className="flex-1 space-y-3">
        <h4 className="text-lg font-semibold text-foreground">{title}</h4>
        <p className="text-muted-foreground">{description}</p>
        {imageSrc && (
          <div className="mt-4 overflow-hidden rounded-lg border bg-secondary">
            <img
              src={imageSrc}
              alt={imageAlt || title}
              className="w-full object-cover"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default StepCard;
