import { useState } from "react";
import Header from "@/components/Header";
import NewsGrid from "@/components/NewsGrid";
import RightSidebar from "@/components/RightSidebar";
import NetworkSidebar from "@/components/NetworkSidebar";
import Footer from "@/components/Footer";

const Index = () => {
  const [isNetworkSidebarOpen, setIsNetworkSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <Header onNetworkClick={() => setIsNetworkSidebarOpen(true)} />
      <NetworkSidebar 
        isOpen={isNetworkSidebarOpen} 
        onClose={() => setIsNetworkSidebarOpen(false)} 
      />
      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3">
            <NewsGrid />
          </div>
          <div className="lg:col-span-1">
            <RightSidebar />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
