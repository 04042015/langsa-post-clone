import NewsCard from "./NewsCard";
import politicsImage from "@/assets/news-politics.jpg";
import economyImage from "@/assets/news-economy.jpg";
import sportsImage from "@/assets/news-sports.jpg";
import lifestyleImage from "@/assets/news-lifestyle.jpg";

const NewsGrid = () => {
  const newsData = [
    {
      id: 1,
      title: "Menteri Keuangan Bahas Strategi Baru Pemulihan Ekonomi Nasional",
      image: politicsImage,
      category: "News" as const,
      timeAgo: "12 Agu 2025 • 16 hours ago",
      isLarge: true
    },
    {
      id: 2,
      title: "Penjelasan KPK Kenapa Kuota Haji Tambahan 2024 Dinilai Tak Sesuai Aturan",
      image: economyImage,
      category: "News" as const,
      timeAgo: "12 Agu 2025 • 16 hours ago"
    },
    {
      id: 3,
      title: "Kasus Pencemaran Nama Baik Ternyata Ini yang Dilaporkan Nurul Azizah",
      image: lifestyleImage,
      category: "Spotlight" as const,
      timeAgo: "12 Agu 2025 • 17 hours ago"
    },
    {
      id: 4,
      title: "Jisoo BLACKPINK Rilis MV yang Diam-diam Syuting di Rainforest Wild Asia",
      image: sportsImage,
      category: "Spotlight" as const,
      timeAgo: "12 Agu 2025 • 16 hours ago"
    },
    {
      id: 5,
      title: "Oasis Bintara TNI AD Dehan Kasiman Meninggal saat Jalani Pendidikan di Pusdiktop",
      image: economyImage,
      category: "News" as const,
      timeAgo: "12 Agu 2025 • 17 hours ago"
    },
    {
      id: 6,
      title: "Tim Nasional Indonesia Berhasil Lolos ke Semifinal Piala Asia",
      image: sportsImage,
      category: "Arena" as const,
      timeAgo: "12 Agu 2025 • 18 hours ago"
    },
    {
      id: 7,
      title: "Tren Kuliner Street Food Indonesia Mendunia di Festival Gastronomi",
      image: lifestyleImage,
      category: "Lifestyle" as const,
      timeAgo: "12 Agu 2025 • 19 hours ago"
    },
    {
      id: 8,
      title: "Bursa Efek Indonesia Catat Rekor Tertinggi dalam Sejarah",
      image: politicsImage,
      category: "Ekobiz" as const,
      timeAgo: "12 Agu 2025 • 20 hours ago"
    }
  ];

  return (
    <section className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Featured large article */}
        <div className="lg:col-span-2">
          <NewsCard 
            {...newsData[0]}
            isLarge={true}
          />
        </div>

        {/* Secondary articles */}
        <div className="space-y-6">
          <NewsCard {...newsData[1]} />
          <NewsCard {...newsData[2]} />
        </div>

        {/* Regular grid articles */}
        {newsData.slice(3).map((article) => (
          <NewsCard 
            key={article.id}
            {...article}
          />
        ))}
      </div>

      {/* Advertisement placeholder */}
      <div className="mt-8 text-center">
        <div className="bg-gray-100 rounded-lg py-8 px-4 text-gray-500">
          Advertisement
        </div>
      </div>
    </section>
  );
};

export default NewsGrid;