import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowRight, Shield, Droplets, Stethoscope, Pill, Truck, CheckCircle2, DollarSign, MapPin, MessageCircle, Package, BadgeCheck } from "lucide-react";
import { CATEGORIES, PRODUCTS, WHATSAPP_LINK } from "../data";

export default function Home() {
  const featuredProducts = PRODUCTS.slice(0, 6);

  return (
    <div className="pt-24 pb-0">
      {/* Hero Section */}
      <section className="relative bg-mesh overflow-hidden py-16 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/80 border border-border text-sm font-medium text-primary mb-6 shadow-sm">
                <BadgeCheck className="w-4 h-4 text-accent" />
                GST & IEC Certified ✓
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-dark leading-tight mb-6">
                Reliable Medical Supplies.<br />
                <span className="text-primary">Delivered Across Karnataka.</span>
              </h1>
              <p className="text-lg md:text-xl text-dark/80 mb-8 leading-relaxed">
                Wholesale distributor of PPE, hospital consumables, and pharmaceuticals. Trusted by 10+ years of ethical supply.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex justify-center items-center gap-2 bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-md font-medium transition-colors text-lg shadow-md"
                >
                  Request a Bulk Quote
                </a>
                <Link
                  to="/products"
                  className="inline-flex justify-center items-center gap-2 bg-white hover:bg-secondary border-2 border-primary text-primary px-8 py-4 rounded-md font-medium transition-colors text-lg"
                >
                  View Our Products
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative hidden lg:block"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent rounded-2xl transform rotate-3 scale-105"></div>
              <img
                src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800&h=600"
                alt="Medical Supplies Packaging"
                className="relative rounded-2xl shadow-2xl object-cover w-full h-[500px]"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Trust Ribbon / Stats Bar */}
      <section className="bg-primary text-white py-12 border-y border-primary-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-white/20">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="px-4">
              <div className="text-3xl md:text-4xl font-heading font-bold text-accent mb-2">10+</div>
              <div className="text-sm md:text-base font-medium opacity-90">Years in Business</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="px-4">
              <div className="text-3xl md:text-4xl font-heading font-bold text-accent mb-2">500+</div>
              <div className="text-sm md:text-base font-medium opacity-90">Products</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="px-4">
              <div className="text-3xl md:text-4xl font-heading font-bold text-accent mb-2">11,600+</div>
              <div className="text-sm md:text-base font-medium opacity-90">B2B Clients Served</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} className="px-4">
              <div className="text-3xl md:text-4xl font-heading font-bold text-accent mb-2">Pan-KA</div>
              <div className="text-sm md:text-base font-medium opacity-90">Delivery Network</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Category Highlights */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark mb-4">Our Core Categories</h2>
            <p className="text-lg text-dark/70 max-w-2xl mx-auto">Comprehensive wholesale solutions for every healthcare need.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {CATEGORIES.map((category, index) => {
              const Icon = category.icon === 'Shield' ? Shield : category.icon === 'Droplets' ? Droplets : category.icon === 'Stethoscope' ? Stethoscope : Pill;
              return (
                <Link
                  key={category.id}
                  to={`/products?category=${category.id}`}
                  className="group block p-8 rounded-xl border border-border bg-secondary hover:bg-white hover:shadow-xl hover:border-primary/20 transition-all duration-300"
                >
                  <div className="w-14 h-14 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:rotate-6 transition-transform duration-300">
                    <Icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-dark mb-3">{category.name}</h3>
                  <div className="flex items-center text-primary font-medium text-sm group-hover:text-accent transition-colors">
                    Explore <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-secondary border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark mb-4">Why Partner With Us?</h2>
            <p className="text-lg text-dark/70 max-w-2xl mx-auto">Built on trust, driven by logistics. We are Mangalore's premier B2B medical supplier.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { icon: Truck, title: "On-Time Delivery", desc: "We understand hospital procurement timelines. Reliable logistics across Karnataka." },
              { icon: CheckCircle2, title: "Verified & Certified", desc: "GST registered, IEC certified, ethically sourced products you can trust." },
              { icon: DollarSign, title: "Bulk Pricing", desc: "Competitive wholesale rates with flexible payment modes for regular partners." },
              { icon: MapPin, title: "Local Roots", desc: "Based in Mangalore (Falnir & Kottara Chowki), serving Karnataka since 2014." },
              { icon: MessageCircle, title: "WhatsApp-First", desc: "Quick responses, faster orders. Direct line to our sales team." },
              { icon: Package, title: "Wide Product Range", desc: "From N95s to antibiotics — one reliable partner for all your needs." },
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex gap-4"
              >
                <div className="shrink-0 mt-1">
                  <div className="w-12 h-12 rounded-full bg-white border border-border flex items-center justify-center text-primary shadow-sm">
                    <feature.icon className="w-6 h-6" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-heading font-bold text-dark mb-2">{feature.title}</h3>
                  <p className="text-dark/70 leading-relaxed">{feature.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products Strip */}
      <section className="py-20 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 flex justify-between items-end">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark mb-4">Featured Products</h2>
            <p className="text-lg text-dark/70">High-demand supplies ready for bulk dispatch.</p>
          </div>
          <Link to="/products" className="hidden md:flex items-center text-primary font-medium hover:text-accent transition-colors">
            View Catalog <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto pb-8 -mx-4 px-4 snap-x snap-mandatory hide-scrollbar gap-6">
            {featuredProducts.map((product) => (
              <div key={product.id} className="min-w-[280px] sm:min-w-[320px] snap-start group bg-white border border-border rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col">
                <div className="relative h-48 bg-secondary p-4 flex items-center justify-center overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="object-contain max-h-full mix-blend-multiply group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3">
                    <span className="inline-block px-2.5 py-1 rounded-full text-xs font-medium bg-primary/10 text-primary border border-primary/20">
                      {CATEGORIES.find(c => c.id === product.category)?.name}
                    </span>
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-dark mb-2 line-clamp-2">{product.name}</h3>
                  <p className="text-sm text-dark/60 mb-6 flex-grow">{product.spec}</p>
                  
                  <div className="transform translate-y-2 opacity-90 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <a
                      href={`${WHATSAPP_LINK} - Inquiry for ${product.name}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center bg-secondary hover:bg-primary hover:text-white text-primary border border-primary/20 hover:border-primary py-2.5 rounded-md font-medium transition-colors"
                    >
                      Bulk Inquiry
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 text-center md:hidden">
            <Link to="/products" className="inline-flex items-center text-primary font-medium hover:text-accent transition-colors">
              View Full Catalog <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Certifications Ribbon */}
      <section className="py-12 bg-secondary border-t border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            <div className="flex items-center gap-2 font-heading font-bold text-xl text-dark">
              <BadgeCheck className="w-6 h-6" /> GST Registered
            </div>
            <div className="flex items-center gap-2 font-heading font-bold text-xl text-dark">
              <BadgeCheck className="w-6 h-6" /> IEC Certified
            </div>
            <div className="flex items-center gap-2 font-heading font-bold text-xl text-dark">
              <BadgeCheck className="w-6 h-6" /> Made in India
            </div>
            <div className="flex items-center gap-2 font-heading font-bold text-xl text-dark">
              <BadgeCheck className="w-6 h-6" /> ISO 9001:2015
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
