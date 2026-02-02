import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface StatCardProps {
  title: string;
  value: string;
  subtitle: string;
  change: string;
  changeType: "positive" | "negative";
  icon: LucideIcon;
  variant: "users" | "vehicles" | "bookings" | "revenue";
}

const variantStyles = {
  users: "bg-stat-users",
  vehicles: "bg-stat-vehicles",
  bookings: "bg-stat-bookings",
  revenue: "bg-stat-revenue",
};

export const StatCard = ({
  title,
  value,
  subtitle,
  change,
  changeType,
  icon: Icon,
  variant,
}: StatCardProps) => {
  return (
    <div className="rounded-xl bg-card p-5 shadow-sm border border-border/50">
      <div className="flex items-start justify-between">
        <div
          className={cn(
            "flex h-12 w-12 items-center justify-center rounded-xl text-white",
            variantStyles[variant]
          )}
        >
          <Icon className="h-6 w-6" />
        </div>
        <span
          className={cn(
            "text-sm font-medium",
            changeType === "positive" ? "text-success" : "text-destructive"
          )}
        >
          {changeType === "positive" ? "+" : ""}
          {change}
        </span>
      </div>
      <div className="mt-4">
        <p className="text-sm text-muted-foreground">{title}</p>
        <p className="text-2xl font-bold text-foreground">{value}</p>
        <p className="text-xs text-muted-foreground mt-1">{subtitle}</p>
      </div>
    </div>
  );
};
