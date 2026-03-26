import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, CheckCircle2 } from "lucide-react";
import { WHATSAPP_LINK } from "../data";

export default function Footer() {
  return (
    <footer className="bg-dark text-white/80">
      {/* CTA Band */}
      <div className="bg-primary py-12 px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
          Ready to Place a Bulk Order?
        </h2>
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-accent hover:bg-accent-hover text-white px-8 py-4 rounded-md font-medium transition-colors text-lg shadow-lg"
        >
          <Phone className="w-5 h-5" />
          WhatsApp Us Now
        </a>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="inline-block">
              <span className="font-heading font-bold text-2xl text-white tracking-tight">
                Med Express India
              </span>
            </Link>
            <p className="text-sm leading-relaxed">
              Your Trusted Partner in Healthcare Supply. Wholesale distributor of PPE, hospital consumables, and pharmaceuticals based in Mangalore, Karnataka.
            </p>
            <div className="flex items-center gap-2 text-sm font-medium text-white">
              <CheckCircle2 className="w-4 h-4 text-accent" />
              GST & IEC Certified
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-bold text-lg text-white mb-6">Quick Links</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <Link to="/" className="hover:text-accent transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-accent transition-colors">Products</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-accent transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/compliance" className="hover:text-accent transition-colors">Compliance</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-accent transition-colors">Contact</Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-heading font-bold text-lg text-white mb-6">Categories</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <Link to="/products?category=ppe" className="hover:text-accent transition-colors">PPE & Respiratory</Link>
              </li>
              <li>
                <Link to="/products?category=sanitary" className="hover:text-accent transition-colors">Sanitary & Hygiene</Link>
              </li>
              <li>
                <Link to="/products?category=consumables" className="hover:text-accent transition-colors">Hospital Consumables</Link>
              </li>
              <li>
                <Link to="/products?category=pharma" className="hover:text-accent transition-colors">Pharmaceuticals & Chemicals</Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-heading font-bold text-lg text-white mb-6">Contact Us</h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                <span>Lulu Center, Falnir Road & Kottara Chowki, Mangalore, Karnataka 575001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-accent shrink-0" />
                <a href={WHATSAPP_LINK} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
                  +91 98765 43210
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-accent shrink-0" />
                <a href="mailto:info@medexpressindia.com" className="hover:text-accent transition-colors">
                  info@medexpressindia.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 text-center text-sm text-white/50 flex flex-col md:flex-row justify-between items-center gap-4">
          <p>© {new Date().getFullYear()} Med Express India. All rights reserved.</p>
          <p>Designed for B2B Wholesale Distribution.</p>
        </div>
      </div>
    </footer>
  );
}
