import { Users, Car, Calendar, DollarSign, Download, Printer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatCard } from "@/components/dashboard/StatCard";
import { UserGrowthChart } from "@/components/dashboard/UserGrowthChart";
import { FleetStatusChart } from "@/components/dashboard/FleetStatusChart";
import { BookingPerformanceChart } from "@/components/dashboard/BookingPerformanceChart";
import { RevenueTargetChart } from "@/components/dashboard/RevenueTargetChart";
import { TopPerformers } from "@/components/dashboard/TopPerformers";
import { RecentTransactions } from "@/components/dashboard/RecentTransactions";

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-6">
      <div className="mx-auto max-w-7xl space-y-6">
        {/* Stats Row */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <StatCard
            title="Total Users"
            value="1,234"
            subtitle="+92 this month"
            change="8.2%"
            changeType="positive"
            icon={Users}
            variant="users"
          />
          <StatCard
            title="Total Vehicles"
            value="567"
            subtitle="+28 new listings"
            change="5.1%"
            changeType="positive"
            icon={Car}
            variant="vehicles"
          />
          <StatCard
            title="Total Bookings"
            value="890"
            subtitle="+98 this month"
            change="12.5%"
            changeType="positive"
            icon={Calendar}
            variant="bookings"
          />
          <StatCard
            title="Total Revenue"
            value="Rs. 2.3M"
            subtitle="+Rs. 308K this month"
            change="15.3%"
            changeType="positive"
            icon={DollarSign}
            variant="revenue"
          />
        </div>

        {/* User Growth + Fleet Status */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <UserGrowthChart />
          </div>
          <div>
            <FleetStatusChart />
          </div>
        </div>

        {/* Booking Performance + Revenue Target */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <BookingPerformanceChart />
          <RevenueTargetChart />
        </div>

        {/* Top Performers + Transactions */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
          <div className="lg:col-span-1">
            <TopPerformers />
          </div>
          <div className="lg:col-span-3">
            <RecentTransactions />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-end gap-3">
          <Button className="gap-2 bg-stat-vehicles hover:bg-stat-vehicles/90">
            <Download className="h-4 w-4" />
            Download Full Report
          </Button>
          <Button variant="outline" className="gap-2">
            <Printer className="h-4 w-4" />
            Print
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Index;
