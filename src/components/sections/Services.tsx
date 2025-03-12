
import React from "react";
import ServiceCard from "../ui/ServiceCard";
import { PhoneCall, Globe, Building } from "lucide-react";

const Services = () => {
  return (
    <section id="services" className="section-padding bg-sync-white relative">
      <div className="max-container">
        <div className="text-center mb-16">
          <p className="text-sync-lightBlue font-medium mb-3 animate-fade-in">OUR SERVICES</p>
          <h2 className="text-3xl md:text-4xl font-bold animate-fade-in" style={{ animationDelay: "0.1s" }}>
            AI-Powered Solutions for Restaurant Growth
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ServiceCard
            title="AI Voicebots"
            description="Automate customer calls & bookings instantly. Our voice AI handles reservation inquiries, manages waitlists, and answers common questions without human intervention."
            icon={
              <PhoneCall size={24} className="text-sync-blue" />
            }
            delay="0.1s"
          />

          <ServiceCard
            title="Digital Marketing"
            description="Turn local searches into paying customers. Our AI targets hungry diners in your area and converts their searches into reservations with precision-targeted campaigns."
            icon={
              <Globe size={24} className="text-sync-blue" />
            }
            delay="0.2s"
          />

          <ServiceCard
            title="Franchise Expansion"
            description="Expand your restaurant brand profitably. Use our AI-driven analytics to identify ideal locations, optimize operations across multiple sites, and scale your success."
            icon={
              <Building size={24} className="text-sync-blue" />
            }
            delay="0.3s"
          />
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-sync-blue/5 rounded-full -translate-x-1/2 filter blur-3xl" />
    </section>
  );
};

export default Services;
