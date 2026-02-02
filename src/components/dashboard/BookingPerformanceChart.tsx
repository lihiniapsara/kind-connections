import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { month: "Jan", bookings: 650 },
  { month: "Feb", bookings: 800 },
  { month: "Mar", bookings: 720 },
  { month: "Apr", bookings: 880 },
  { month: "May", bookings: 780 },
  { month: "Jun", bookings: 890 },
];

export const BookingPerformanceChart = () => {
  return (
    <div className="rounded-xl bg-card p-5 shadow-sm border border-border/50">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-foreground">Booking Performance</h3>
        <p className="text-sm text-muted-foreground">Monthly booking volume</p>
      </div>
      <div className="h-[220px]">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="hsl(220, 13%, 91%)" vertical={false} />
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
            <Bar
              dataKey="bookings"
              fill="hsl(222, 47%, 25%)"
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
