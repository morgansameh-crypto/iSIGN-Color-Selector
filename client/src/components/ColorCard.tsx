import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

interface ColorCardProps {
  code: string;
  name?: string;
  hex: string;
  cmyk?: string;
  rgb?: string;
  ral?: string;
  isSelected?: boolean;
  onClick?: () => void;
}

export function ColorCard({
  code,
  name,
  hex,
  cmyk,
  rgb,
  ral,
  isSelected,
  onClick,
}: ColorCardProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "group relative flex flex-col gap-2 p-3 rounded-lg border-2 transition-all hover:shadow-lg hover:scale-105",
        isSelected
          ? "border-primary shadow-md"
          : "border-border hover:border-primary/50"
      )}
    >
      {/* Color Swatch */}
      <div
        className="w-full aspect-square rounded-md shadow-sm relative overflow-hidden"
        style={{ backgroundColor: hex }}
      >
        {isSelected && (
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <div className="bg-white rounded-full p-1">
              <Check className="w-5 h-5 text-primary" />
            </div>
          </div>
        )}
      </div>

      {/* Color Info */}
      <div className="flex flex-col gap-1 text-left">
        <div className="font-semibold text-sm truncate">{code}</div>
        {name && (
          <div className="text-xs text-muted-foreground truncate">{name}</div>
        )}
        <div className="text-xs font-mono text-muted-foreground">{hex}</div>
        {(cmyk || rgb || ral) && (
          <div className="text-xs text-muted-foreground space-y-0.5 mt-1">
            {cmyk && <div className="truncate">CMYK: {cmyk}</div>}
            {rgb && <div className="truncate">RGB: {rgb}</div>}
            {ral && <div className="truncate">RAL: {ral}</div>}
          </div>
        )}
      </div>
    </button>
  );
}
