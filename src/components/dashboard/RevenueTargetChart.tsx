import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
} from "recharts";

const data = [
  { month: "Jan", actual: 1800000, target: 1700000 },
  { month: "Feb", actual: 1900000, target: 1800000 },
  { month: "Mar", actual: 2000000, target: 1900000 },
  { month: "Apr", actual: 2200000, target: 2000000 },
  { month: "May", actual: 2400000, target: 2100000 },
  { month: "Jun", actual: 2600000, target: 2200000 },
];

const formatValue = (value: number) => {
  if (value >= 1000000) {
    return `${(value / 1000000).toFixed(1)}M`;
  }
  return value.toString();
};

export const RevenueTargetChart = () => {
  return (
    <div className="rounded-xl bg-card p-5 shadow-sm border border-border/50">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-foreground">Revenue vs Target</h3>
        <p className="text-sm text-muted-foreground">Actual revenue against targets</p>
      </div>
      <div className="h-[220px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <defs>
              <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="hsl(222, 47%, 25%)" stopOpacity={0.2} />
                <stop offset="95%" stopColor="hsl(222, 47%, 25%)" stopOpacity={0} />
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
              tickFormatter={formatValue}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(0, 0%, 100%)",
                border: "1px solid hsl(220, 13%, 91%)",
                borderRadius: "8px",
              }}
              formatter={(value: number) => [`Rs. ${formatValue(value)}`, ""]}
            />
            <Line
              type="monotone"
              dataKey="target"
              stroke="hsl(220, 13%, 75%)"
              strokeWidth={2}
              strokeDasharray="5 5"
              dot={false}
            />
            <Line
              type="monotone"
              dataKey="actual"
              stroke="hsl(222, 47%, 25%)"
              strokeWidth={2}
              dot={{ fill: "hsl(222, 47%, 25%)", r: 4 }}
              activeDot={{ r: 6 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
