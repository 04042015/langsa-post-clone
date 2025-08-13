import Header from "@/components/Header";
import NewsGrid from "@/components/NewsGrid";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <NewsGrid />
      </main>
    </div>
  );
};

export default Index;
