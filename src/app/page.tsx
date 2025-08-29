"use client";
import { User, ChevronDown, Calendar } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import DashboardStats from "../components/DashboardStats";
import SalesByLocation from "../components/SalesByLocation";
import Sidebar from "../components/Sidebar";
import BestSellingProducts from "@/components/BestSellingProducts";
import TopSellers from "@/components/TopSellers";
import StoreVisitsChart from "@/components/StoreVisitsChart";
import RecentOrders from "@/components/RecentOrders";

export default function Dashboard() {
  return (
    <div className="flex min-h-screen w-full bg-gray-100 overflow-auto">
      <Sidebar />

      <div className="flex-1 p-6 ml-64">
        <div className="flex justify-between items-center mb-6  ">
          <h2 className="text-lg font-semibold">Good Morning, Build My Rig!</h2>
          <div className="flex items-center gap-4">
            <Calendar className="w-5 h-5 cursor-pointer text-gray-600" />
            <div className="flex items-center gap-2 cursor-pointer">
              <span>Add Product</span>
              <ChevronDown className="w-4 h-4 text-gray-600" />
            </div>
            <User className="w-6 h-6 text-gray-600" />
          </div>
        </div>

        <div className="grid grid-cols-4 gap-4 mb-6">
          {[
            { title: "Total Earnings", value: "$560.0k", change: "+16.24%" },
            { title: "Orders", value: "36,894", change: "-3.57%" },
            { title: "Customers", value: "183.35M", change: "+29.08%" },
            { title: "My Balance", value: "$166.00k", change: "+0.00%" },
          ].map((stat, idx) => (
            <Card key={idx} className="shadow-md">
              <CardContent className="p-4">
                <h3 className="text-gray-600">{stat.title}</h3>
                <p className="text-2xl font-bold">{stat.value}</p>
                <span className="text-green-600">{stat.change}</span>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="p-6 bg-gray-50 grid grid-cols-3 gap-6">
          <div className="col-span-2">
            <DashboardStats />
          </div>
          <div>
            <SalesByLocation />
          </div>
        </div>
        <div className="bg-gray-50 grid grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <BestSellingProducts />
          </div>
          <div className="lg:col-span-2">
            <TopSellers />
          </div>
        </div>
        <div className="bg-gray-50 grid grid-cols-2 gap-6 mt-6">
          <div className="lg:col-span-1">
            <StoreVisitsChart />
          </div>
          <div className="lg:col-span-1">
            <RecentOrders />
          </div>
        </div>
      </div>
    </div>
  );
}
