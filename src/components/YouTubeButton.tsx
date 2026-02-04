import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface YouTubeButtonProps {
  href: string;
  children: React.ReactNode;
}

const YouTubeButton = ({ href, children }: YouTubeButtonProps) => {
  return (
    <Button
      asChild
      variant="outline"
      className="gap-2 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
    >
      <a href={href} target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
        {children}
        <ExternalLink className="h-4 w-4" />
      </a>
    </Button>
  );
};

export default YouTubeButton;
