import React, { useState } from "react";
import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { WHATSAPP_LINK } from "../data";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    organization: "",
    phone: "",
    productInterest: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simulate form submission or redirect to WhatsApp
    const text = `Hi, I am ${formData.name} from ${formData.organization}. I am interested in ${formData.productInterest}. ${formData.message}`;
    const encodedText = encodeURIComponent(text);
    window.open(`https://wa.me/919902509955?text=${encodedText}`, "_blank");
  };

  return (
    <div className="pt-24 pb-0 bg-secondary min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-dark mb-6">Let's Talk Bulk Supply</h1>
          <p className="text-lg text-dark/70 max-w-2xl mx-auto leading-relaxed">
            Get in touch with our sales team for wholesale pricing, product availability, and distribution partnerships across Karnataka.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-20">
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 md:p-10 rounded-2xl border border-border shadow-sm"
          >
            <h2 className="text-2xl font-heading font-bold text-dark mb-8">Request a Quote</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-dark mb-2">Full Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-secondary focus:bg-white focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors outline-none"
                    placeholder=""
                  />
                </div>
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-dark mb-2">Organization/Hospital *</label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    required
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-secondary focus:bg-white focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors outline-none"
                    placeholder=""
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-dark mb-2">Phone/WhatsApp *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-secondary focus:bg-white focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors outline-none"
                    placeholder=""
                  />
                </div>
                <div>
                  <label htmlFor="productInterest" className="block text-sm font-medium text-dark mb-2">Product Interest</label>
                  <select
                    id="productInterest"
                    name="productInterest"
                    value={formData.productInterest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-secondary focus:bg-white focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors outline-none appearance-none"
                  >
                    <option value="">Select Category</option>
                    <option value="PPE & Respiratory">PPE & Respiratory</option>
                    <option value="Sanitary & Hygiene">Sanitary & Hygiene</option>
                    <option value="Hospital Consumables">Hospital Consumables</option>
                    <option value="Pharmaceuticals">Pharmaceuticals & Chemicals</option>
                    <option value="Mixed Order">Mixed Bulk Order</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-dark mb-2">Message/Requirements</label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border border-border bg-secondary focus:bg-white focus:ring-2 focus:ring-primary/50 focus:border-primary transition-colors outline-none resize-none"
                  placeholder="Please specify quantities, specific brands, or delivery timelines..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-lg font-medium transition-colors shadow-md"
              >
                <Send className="w-5 h-5" />
                Send Inquiry via WhatsApp
              </button>
              <p className="text-xs text-center text-dark/50 mt-4">
                We typically respond within 2 hours during business hours.
              </p>
            </form>
          </motion.div>

          {/* Contact Details */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col justify-between"
          >
            <div className="bg-primary text-white p-8 md:p-10 rounded-2xl shadow-lg mb-8">
              <h2 className="text-2xl font-heading font-bold mb-8 text-white">
                Contact Information
              </h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1 text-blue-200">
                        Head Office
                      </h3>
                    <p className="text-white/80 leading-relaxed">
                     3-28/2-14, 15, 16, Kausthuba, 1st Floor,<br/>
                    Near Raktheshwari Temple, Malemar Road,<br/>
                    Kottara Chowki, Mangaluru - 575 006
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1 text-blue-200">Direct Sales (WhatsApp)</h3>
                    <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="text-white/80 hover:text-accent transition-colors">
                      +91 99025 09955
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1 text-blue-200">Email</h3>
                    <a href="mailto:info@medexpressindia.com" className="text-white/80 hover:text-accent transition-colors">
                      info@medexpressindia.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-1 text-blue-200">Working Hours</h3>
                    <p className="text-white/80">
                      Monday – Saturday<br />
                      9:00 AM – 6:00 PM IST
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden h-64 relative">
              {/* In a real app, embed Google Maps iframe here */}
              <div className="w-full h-[400px] rounded-xl overflow-hidden">
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2962.3258483113523!2d74.8424059!3d12.907583700000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba35a7651c4fdd9%3A0x72fc0bdd8b5013d2!2sMED%20EXPRESS%20INDIA!5e1!3m2!1sen!2sin!4v1774679552400!5m2!1sen!2sin"
    width="100%"
    height="100%"
    style={{ border: 0 }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
            </div>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
