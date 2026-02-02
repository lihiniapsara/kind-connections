import { Search, Filter, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const transactions = [
  {
    id: 1,
    customer: "John Silva",
    avatar: "J",
    vehicle: "Toyota Aqua",
    revenue: "Rs. 12,500",
    status: "Completed",
  },
  {
    id: 2,
    customer: "Sarah Fernando",
    avatar: "S",
    vehicle: "Honda Civic",
    revenue: "Rs. 18,000",
    status: "Completed",
  },
  {
    id: 3,
    customer: "Kamal Perera",
    avatar: "K",
    vehicle: "Toyota Prius",
    revenue: "Rs. 15,500",
    status: "Pending",
  },
  {
    id: 4,
    customer: "Nimal De Silva",
    avatar: "N",
    vehicle: "Suzuki Alto",
    revenue: "Rs. 8,500",
    status: "Completed",
  },
  {
    id: 5,
    customer: "Amara Jayasinghe",
    avatar: "A",
    vehicle: "Honda Fit",
    revenue: "Rs. 11,000",
    status: "Completed",
  },
];

const avatarColors = [
  "bg-stat-vehicles",
  "bg-stat-users",
  "bg-primary",
  "bg-stat-bookings",
  "bg-stat-revenue",
];

export const RecentTransactions = () => {
  return (
    <div className="rounded-xl bg-card p-5 shadow-sm border border-border/50">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-foreground">Recent Transactions</h3>
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Search className="h-4 w-4 text-muted-foreground" />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <Filter className="h-4 w-4 text-muted-foreground" />
          </Button>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-sm text-muted-foreground">
              <th className="pb-3 font-medium">Customer</th>
              <th className="pb-3 font-medium">Vehicle</th>
              <th className="pb-3 font-medium">Revenue</th>
              <th className="pb-3 font-medium">Status</th>
              <th className="pb-3 font-medium">Action</th>
            </tr>
          </thead>
          <tbody className="text-sm">
            {transactions.map((tx, index) => (
              <tr key={tx.id} className="border-t border-border/50">
                <td className="py-3">
                  <div className="flex items-center gap-3">
                    <div
                      className={cn(
                        "flex h-8 w-8 items-center justify-center rounded-full text-white text-xs font-medium",
                        avatarColors[index % avatarColors.length]
                      )}
                    >
                      {tx.avatar}
                    </div>
                    <span className="font-medium text-foreground">{tx.customer}</span>
                  </div>
                </td>
                <td className="py-3 text-muted-foreground">{tx.vehicle}</td>
                <td className="py-3 font-medium text-foreground">{tx.revenue}</td>
                <td className="py-3">
                  <span
                    className={cn(
                      "text-sm font-medium",
                      tx.status === "Completed" ? "text-success" : "text-warning"
                    )}
                  >
                    {tx.status}
                  </span>
                </td>
                <td className="py-3">
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <MoreHorizontal className="h-4 w-4 text-muted-foreground" />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
