
import { cn } from "@/lib/utils";

interface SustainabilityScoreProps {
  score: number;
  size?: "sm" | "md" | "lg";
  showLabel?: boolean;
  className?: string;
}

const SustainabilityScore = ({
  score,
  size = "md",
  showLabel = true,
  className,
}: SustainabilityScoreProps) => {
  // Score should be between 0-100
  const normalizedScore = Math.min(100, Math.max(0, score));
  
  // Size variations
  const sizeClasses = {
    sm: "h-1 w-16",
    md: "h-1.5 w-24",
    lg: "h-2 w-32",
  };
  
  const labelSizeClasses = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  };
  
  // Color based on score
  const getBarColor = (score: number) => {
    if (score >= 80) return "bg-eco-low";
    if (score >= 50) return "bg-eco-medium";
    return "bg-eco-high";
  };

  return (
    <div className={cn("space-y-1", className)}>
      {showLabel && (
        <div className="flex justify-between items-center">
          <span className={cn("text-muted-foreground", labelSizeClasses[size])}>Sustainability</span>
          <span className={cn("font-medium", labelSizeClasses[size])}>{normalizedScore}/100</span>
        </div>
      )}
      <div className={cn("bg-muted rounded-full overflow-hidden", sizeClasses[size])}>
        <div 
          className={cn(
            "h-full rounded-full transition-all duration-500 ease-out",
            getBarColor(normalizedScore)
          )}
          style={{ width: `${normalizedScore}%` }}
          aria-valuenow={normalizedScore}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
    </div>
  );
};

export default SustainabilityScore;
