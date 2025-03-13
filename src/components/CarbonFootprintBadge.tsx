
import { cn } from "@/lib/utils";

interface CarbonFootprintBadgeProps {
  footprint: number;
  showLabel?: boolean;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const CarbonFootprintBadge = ({
  footprint,
  showLabel = true,
  size = "md",
  className,
}: CarbonFootprintBadgeProps) => {
  // Determine the impact level (low, medium, high)
  const getImpactLevel = (value: number) => {
    if (value < 5) return "low";
    if (value < 10) return "medium";
    return "high";
  };

  const impact = getImpactLevel(footprint);
  
  // Style based on impact level
  const getBadgeColor = (impact: string) => {
    switch (impact) {
      case "low":
        return "bg-eco-low text-white";
      case "medium":
        return "bg-eco-medium text-white";
      case "high":
        return "bg-eco-high text-white";
      default:
        return "bg-muted text-muted-foreground";
    }
  };
  
  // Size styling
  const sizeClasses = {
    sm: "text-xs py-0.5 px-2",
    md: "text-sm py-1 px-3",
    lg: "text-base py-1.5 px-4",
  };

  return (
    <div 
      className={cn(
        "flex items-center gap-1.5 rounded-full font-medium transition-colors duration-300",
        getBadgeColor(impact),
        sizeClasses[size],
        className
      )}
    >
      <span className="inline-block h-2 w-2 rounded-full bg-white/80" />
      <span>
        {footprint} kg CO<sub>2</sub>
        {showLabel && (
          <span className="ml-1 opacity-90">
            • {impact} impact
          </span>
        )}
      </span>
    </div>
  );
};

export default CarbonFootprintBadge;
