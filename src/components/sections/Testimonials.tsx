
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    name: "Michael Rodriguez",
    position: "Owner, Bella Italia Restaurant",
    quote: "ScaleSync's AI voice system has reduced our missed calls by 85% and increased our reservations by 30%. It's like having a 24/7 receptionist that never takes a day off.",
    rating: 5
  },
  {
    name: "Sarah Chen",
    position: "Manager, Ocean Breeze Seafood",
    quote: "Our slow Mondays and Tuesdays are now almost as busy as weekends thanks to the AI-triggered promotions. The ROI on this system has been incredible for our business.",
    rating: 5
  },
  {
    name: "James Wilson",
    position: "CEO, Urban Bites Chain",
    quote: "Expanding to three new locations was seamless with ScaleSync's franchise tools. The AI analytics helped us choose perfect locations and maintain quality across all restaurants.",
    rating: 5
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="section-padding bg-sync-gray relative overflow-hidden">
      <div className="max-container">
        <div className="text-center mb-12">
          <p className="text-sync-lightBlue font-medium mb-3 animate-fade-in">TESTIMONIALS</p>
          <h2 className="text-3xl md:text-4xl font-bold animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Trusted by Restaurants Like Yours
          </h2>
        </div>

        <div className="flex justify-center mb-16 animate-fade-in" style={{ animationDelay: "0.2s" }}>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {/* Restaurant Logo Placeholders */}
            {[1, 2, 3, 4].map((logo) => (
              <div 
                key={logo} 
                className="w-32 h-16 md:w-40 md:h-20 bg-white/80 rounded-lg flex items-center justify-center shadow-sm"
              >
                <div className="text-sync-black/30 font-medium">Restaurant {logo}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto relative">
          <div className="glass p-8 md:p-12 rounded-2xl animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <div className="mb-4 flex">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
              ))}
            </div>
            
            <p className="text-lg md:text-xl italic mb-8">"{testimonials[currentIndex].quote}"</p>
            
            <div>
              <p className="font-semibold text-sync-blue">{testimonials[currentIndex].name}</p>
              <p className="text-sync-black/70">{testimonials[currentIndex].position}</p>
            </div>

            <div className="flex gap-2 absolute -bottom-4 right-8">
              <Button 
                onClick={prevTestimonial} 
                size="icon" 
                variant="ghost" 
                className="bg-white shadow-md hover:bg-sync-blue hover:text-white"
              >
                <ChevronLeft size={18} />
              </Button>
              <Button 
                onClick={nextTestimonial} 
                size="icon" 
                variant="ghost" 
                className="bg-white shadow-md hover:bg-sync-blue hover:text-white"
              >
                <ChevronRight size={18} />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-sync-blue/5 rounded-full -translate-x-1/2 filter blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sync-lightBlue/5 rounded-full translate-x-1/2 filter blur-3xl" />
    </section>
  );
};

export default Testimonials;
