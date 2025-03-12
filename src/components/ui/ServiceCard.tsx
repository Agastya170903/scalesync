
import React from "react";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
  delay = "0s"
}) => {
  return (
    <div 
      className="glass p-8 rounded-2xl h-full flex flex-col transition-all duration-300 hover:shadow-xl animate-scale-up"
      style={{ animationDelay: delay }}
    >
      <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-sync-blue/10 mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-sync-black/80 leading-relaxed flex-grow">{description}</p>
    </div>
  );
};

export default ServiceCard;
