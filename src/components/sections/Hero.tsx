
import React from "react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 overflow-hidden bg-gradient-to-b from-sync-white to-sync-gray">
      <div className="max-container relative z-10">
        <div className="flex flex-col items-center text-center">
          <div className="space-y-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <p className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-sync-blue/10 text-sync-blue">
              AI Automation for Restaurants
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold max-w-4xl leading-tight md:leading-tight lg:leading-tight mx-auto">
              We help restaurants automate their operations with{" "}
              <span className="text-gradient">AI</span>
            </h1>
            <p className="text-lg md:text-xl text-sync-black/80 max-w-2xl mx-auto pt-2">
              Elevate your restaurant with cutting-edge AI solutions tailored for increased revenue, better customer experience, and operational efficiency.
            </p>
          </div>

          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <Button
              onClick={scrollToContact}
              className="px-6 py-6 bg-sync-blue hover:bg-sync-blue/90 text-white rounded-lg shadow-lg transition-all duration-300 transform hover:translate-y-[-3px] hover:shadow-xl text-lg font-medium"
            >
              Book a Free Demo
            </Button>
            <Button
              onClick={scrollToContact}
              variant="outline"
              className="px-6 py-6 border-sync-blue text-sync-blue bg-white hover:bg-sync-blue/10 rounded-lg transition-all duration-300 transform hover:translate-y-[-3px] text-lg font-medium"
            >
              Get AI Strategy Call
            </Button>
          </div>
        </div>

        {/* Abstract background elements */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-6xl z-[-1] opacity-50">
          <div className="absolute top-0 right-[10%] w-72 h-72 bg-sync-lightBlue/20 rounded-full filter blur-[120px]" />
          <div className="absolute bottom-[20%] left-[10%] w-72 h-72 bg-sync-blue/10 rounded-full filter blur-[120px]" />
        </div>
      </div>

      {/* Bottom wave separator */}
      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24 overflow-hidden">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="absolute bottom-0 w-full h-full transform rotate-180"
          fill="currentColor"
          style={{ color: '#F7F9FC' }}
        >
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
