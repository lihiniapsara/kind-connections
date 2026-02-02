import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const data = [
  { month: "Jan", totalUsers: 800, newUsers: 650 },
  { month: "Feb", totalUsers: 950, newUsers: 700 },
  { month: "Mar", totalUsers: 900, newUsers: 750 },
  { month: "Apr", totalUsers: 1000, newUsers: 800 },
  { month: "May", totalUsers: 1100, newUsers: 850 },
  { month: "Jun", totalUsers: 1200, newUsers: 900 },
];

export const UserGrowthChart = () => {
  return (
    <div className="rounded-xl bg-card p-5 shadow-sm border border-border/50">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-lg font-semibold text-foreground">User Growth Trend</h3>
          <p className="text-sm text-muted-foreground">
            Monthly active users and new registrations
          </p>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary" />
            <span className="text-muted-foreground">Total Users</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-stat-users" />
            <span className="text-muted-foreground">New Users</span>
          </div>
        </div>
      </div>
      <div className="h-[250px]">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <defs>
              <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(222, 47%, 25%)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(222, 47%, 25%)" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorNew" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(150, 60%, 45%)" stopOpacity={0.3} />
                <stop offset="95%" stopColor="hsl(150, 60%, 45%)" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 13%, 91%)" />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fill: "hsl(220, 9%, 46%)", fontSize: 12 }}
            />
            <YAxis
              axisLine={false}
              tickLine={false}
              tick={{ fill: "hsl(220, 9%, 46%)", fontSize: 12 }}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(0, 0%, 100%)",
                border: "1px solid hsl(220, 13%, 91%)",
                borderRadius: "8px",
              }}
            />
            <Area
              type="monotone"
              dataKey="totalUsers"
              stroke="hsl(222, 47%, 25%)"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorTotal)"
            />
            <Area
              type="monotone"
              dataKey="newUsers"
              stroke="hsl(150, 60%, 45%)"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorNew)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
