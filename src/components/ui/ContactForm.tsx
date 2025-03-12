
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent successfully!",
      description: "We'll get back to you as soon as possible.",
      variant: "default",
    });
    
    setFormData({
      name: "",
      email: "",
      company: "",
      message: ""
    });
    
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full space-y-5 animate-fade-in" style={{ animationDelay: "0.2s" }}>
      <div className="space-y-2">
        <label htmlFor="name" className="text-sm font-medium text-sync-black/80">
          Full Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          required
          value={formData.name}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-sync-black/10 focus:border-sync-lightBlue/50 focus:ring focus:ring-sync-lightBlue/20 focus:outline-none transition-all duration-200"
          placeholder="John Doe"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="email" className="text-sm font-medium text-sync-black/80">
          Email Address
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-sync-black/10 focus:border-sync-lightBlue/50 focus:ring focus:ring-sync-lightBlue/20 focus:outline-none transition-all duration-200"
          placeholder="john@company.com"
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="company" className="text-sm font-medium text-sync-black/80">
          Company Name
        </label>
        <input
          type="text"
          id="company"
          name="company"
          value={formData.company}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-sync-black/10 focus:border-sync-lightBlue/50 focus:ring focus:ring-sync-lightBlue/20 focus:outline-none transition-all duration-200"
          placeholder="Company Inc."
        />
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-sync-black/80">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className="w-full px-4 py-3 rounded-lg border border-sync-black/10 focus:border-sync-lightBlue/50 focus:ring focus:ring-sync-lightBlue/20 focus:outline-none transition-all duration-200 resize-none"
          placeholder="Tell us about your project and requirements..."
        />
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-sync-blue hover:bg-sync-blue/90 text-white rounded-lg py-3 transition-all duration-300 transform hover:translate-y-[-2px] hover:shadow-md disabled:opacity-70 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};

export default ContactForm;
