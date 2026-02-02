import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Available", value: 342, color: "hsl(222, 47%, 25%)" },
  { name: "Booked", value: 156, color: "hsl(200, 85%, 50%)" },
  { name: "Maintenance", value: 69, color: "hsl(35, 92%, 50%)" },
];

export const FleetStatusChart = () => {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="rounded-xl bg-card p-5 shadow-sm border border-border/50 h-full">
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-foreground">Fleet Status</h3>
        <p className="text-sm text-muted-foreground">Current vehicle availability</p>
      </div>
      <div className="h-[160px] relative">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={70}
              paddingAngle={2}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="absolute inset-0 flex items-center justify-center flex-col">
          <span className="text-xs text-muted-foreground">Booked</span>
          <span className="text-lg font-bold text-foreground">156</span>
        </div>
      </div>
      <div className="mt-4 space-y-2">
        {data.map((item) => (
          <div key={item.name} className="flex items-center justify-between text-sm">
            <div className="flex items-center gap-2">
              <span
                className="h-2 w-2 rounded-full"
                style={{ backgroundColor: item.color }}
              />
              <span className="text-muted-foreground">{item.name}</span>
            </div>
            <span className="font-medium text-foreground">{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
