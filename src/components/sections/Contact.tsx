
import React from "react";
import ContactForm from "../ui/ContactForm";
import { Mail, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="section-padding bg-sync-gray relative">
      <div className="max-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
          <div className="space-y-6">
            <div className="space-y-2 animate-fade-in">
              <p className="text-sync-lightBlue font-medium">CONTACT US</p>
              <h2 className="text-3xl md:text-4xl font-bold">
                Let's Transform Your Restaurant with AI
              </h2>
            </div>
            
            <p className="text-sync-black/80 leading-relaxed max-w-md animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Ready to boost your restaurant's revenue and efficiency with AI-powered automation? Fill out the form, and our team will get back to you promptly to schedule your free demo.
            </p>

            <div className="space-y-4 pt-4 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-sync-blue/10 flex items-center justify-center">
                  <Mail size={18} className="text-sync-blue" />
                </div>
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <a 
                    href="mailto:scalsyncAI@gmail.com" 
                    className="text-sync-black/80 hover:text-sync-blue transition-colors"
                  >
                    scalsyncAI@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full bg-sync-blue/10 flex items-center justify-center">
                  <Phone size={18} className="text-sync-blue" />
                </div>
                <div>
                  <p className="text-sm font-medium">Phone</p>
                  <a 
                    href="tel:+353834254685" 
                    className="text-sync-black/80 hover:text-sync-blue transition-colors"
                  >
                    +353834254685
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="glass p-8 rounded-2xl">
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Background elements */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-sync-lightBlue/5 rounded-full -translate-y-1/2 translate-x-1/2 filter blur-3xl" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-sync-blue/5 rounded-full -translate-x-1/2 filter blur-3xl" />
    </section>
  );
};

export default Contact;
