import { Clock } from "lucide-react";
import CategoryBadge from "./CategoryBadge";
import { cn } from "@/lib/utils";

interface NewsCardProps {
  title: string;
  image: string;
  category: "News" | "Spotlight" | "Lifestyle" | "Arena" | "Ekobiz";
  timeAgo: string;
  isLarge?: boolean;
  className?: string;
}

const NewsCard = ({ title, image, category, timeAgo, isLarge = false, className }: NewsCardProps) => {
  return (
    <article className={cn("group cursor-pointer", className)}>
      <div className="relative overflow-hidden rounded-lg">
        <img 
          src={image} 
          alt={title}
          className={cn(
            "w-full object-cover transition-transform duration-300 group-hover:scale-105",
            isLarge ? "h-64 md:h-96" : "h-48"
          )}
        />
        
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
        
        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <CategoryBadge category={category} />
        </div>
        
        {/* Content overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
          <h3 className={cn(
            "font-bold leading-tight group-hover:text-white/90 transition-colors",
            isLarge ? "text-xl md:text-2xl mb-3" : "text-lg mb-2"
          )}>
            {title}
          </h3>
          
          <div className="flex items-center gap-2 text-sm text-white/80">
            <Clock className="w-4 h-4" />
            <span>{timeAgo}</span>
          </div>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;