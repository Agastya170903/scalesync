
import React from "react";
import { LucideCalendarClock, LucideUsers, LucidePhoneCall } from "lucide-react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay?: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, delay = "0s" }) => {
  return (
    <div 
      className="glass p-8 rounded-2xl h-full flex flex-col transition-all duration-300 hover:shadow-xl animate-scale-up"
      style={{ animationDelay: delay }}
    >
      <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-sync-blue/10 mb-6">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-sync-black/80 leading-relaxed flex-grow">{description}</p>
    </div>
  );
};

const RestaurantFeatures = () => {
  return (
    <section className="section-padding bg-sync-white relative">
      <div className="max-container">
        <div className="text-center mb-16">
          <p className="text-sync-lightBlue font-medium mb-3 animate-fade-in">AI FOR RESTAURANTS</p>
          <h2 className="text-3xl md:text-4xl font-bold animate-fade-in max-w-3xl mx-auto" style={{ animationDelay: "0.1s" }}>
            AI Fills Tables & Boosts Revenue – Even When You're Closed!
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            title="Never Lose a Customer on a Busy Day"
            description="Our AI system efficiently manages reservations and waitlists, ensuring every potential customer is accommodated even during your busiest hours."
            icon={<LucideUsers size={28} className="text-sync-blue" />}
            delay="0.1s"
          />

          <FeatureCard
            title="Fill Empty Tables on Slow Days"
            description="Automatically trigger personalized promotions and special offers to your customer base when business is slow, turning quiet periods into profitable opportunities."
            icon={<LucideCalendarClock size={28} className="text-sync-blue" />}
            delay="0.2s"
          />

          <FeatureCard
            title="Automate Bookings & Calls 24/7"
            description="Let AI handle customer queries, reservations, and special requests instantly, any time of day or night, providing seamless service without additional staff."
            icon={<LucidePhoneCall size={28} className="text-sync-blue" />}
            delay="0.3s"
          />
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-sync-lightBlue/5 rounded-full translate-x-1/2 -translate-y-1/2 filter blur-3xl" />
    </section>
  );
};

export default RestaurantFeatures;
