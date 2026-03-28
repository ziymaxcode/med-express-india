import { motion } from "motion/react";
import { Building2, Users, Target, ShieldCheck, MapPin, CheckCircle2 } from "lucide-react";

export default function About() {
  return (
    <div className="pt-24 pb-0 bg-white">
      {/* Hero */}
      <section className="relative bg-primary overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0 bg-mesh opacity-20 mix-blend-overlay"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white leading-tight mb-6"
          >
            10 Years of Trust.<br />
            <span className="text-accent">One Reliable Name.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed"
          >
            We are Med Express India, Mangalore's premier wholesale distributor of medical consumables, PPE, and pharmaceuticals.
          </motion.p>
        </div>
      </section>

      {/* Our Story & Mission */}
      <section className="py-20 bg-secondary border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark mb-6">Our Story</h2>
              <p className="text-lg text-dark/80 leading-relaxed mb-6">
                Founded in Mangalore, Med Express India has grown to become a cornerstone of Karnataka's healthcare supply chain. For over a decade, we have been the silent engine powering hospitals, clinics, and pharmacies with essential medical supplies.
              </p>
              <p className="text-lg text-dark/80 leading-relaxed mb-8">
                Our journey began with a simple commitment: to provide affordable, high-quality medical supplies without compromising on ethical business practices. Today, we serve over 11,600 B2B clients across the state.
              </p>

              <div className="bg-white p-6 rounded-xl border border-border shadow-sm">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <Target className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-dark">Our Mission</h3>
                </div>
                <p className="text-dark/80 italic">
                  "To provide affordable, high-quality medical supplies to every healthcare institution in Karnataka, ensuring that care is never delayed by logistics."
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent rounded-2xl transform -rotate-3 scale-105"></div>
              <img
                src="https://images.unsplash.com/photo-1587559070757-f72a388edbba?auto=format&fit=crop&q=80&w=800&h=600"
                alt="Medical Warehouse"
                className="relative rounded-2xl shadow-2xl object-cover w-full h-[500px]"
                referrerPolicy="no-referrer"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark mb-12">Leadership</h2>
          <div className="max-w-md mx-auto bg-secondary p-8 rounded-2xl border border-border shadow-sm hover:shadow-md transition-shadow">
            <div className="w-24 h-24 rounded-full bg-primary/10 mx-auto mb-6 flex items-center justify-center text-primary">
              <Users className="w-10 h-10" />
            </div>
            <h3 className="text-2xl font-heading font-bold text-dark mb-2">Mr. Ifthikar Ahmed</h3>
            <p className="text-primary font-medium mb-4">Founder & Managing Director</p>
            <p className="text-dark/70 leading-relaxed">
              With over a decade of experience in medical logistics, Mr. Ahmed leads Med Express India with a focus on ethical trade, transparency, and building long-term partnerships with healthcare providers.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-4">Our Core Values</h2>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">The principles that guide every delivery and every partnership.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: ShieldCheck, title: "Reliability", desc: "Consistent supply, even during critical shortages." },
              { icon: CheckCircle2, title: "Transparency", desc: "Clear pricing, honest timelines, no hidden fees." },
              { icon: Building2, title: "Ethical Trade", desc: "Sourcing only from verified, certified manufacturers." },
              { icon: Users, title: "Customer First", desc: "Dedicated support for every hospital and clinic we serve." },
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/10 border border-white/20 p-8 rounded-xl backdrop-blur-sm"
              >
                <value.icon className="w-10 h-10 text-accent mb-6" />
                <h3 className="text-xl font-heading font-bold text-white mb-3">{value.title}</h3>
                <p className="text-white/70 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Offices */}
      <section className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-dark mb-4">Our Presence</h2>
            <p className="text-lg text-dark/70 max-w-2xl mx-auto">Strategically located in Mangalore to serve Karnataka efficiently.</p>
          </div>

          <div className="flex justify-center">
            <div className="bg-white p-8 rounded-xl border border-border shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-dark mb-2">Head Office & Warehouse</h3>
                <p className="text-dark/70 leading-relaxed">3-28/2-14, 15, 16, Kausthuba, 1st Floor,<br/>
                    Near Raktheshwari Temple, Malemar Road,<br/>
                    Kottara Chowki, Mangaluru - 575 006</p>
              </div>
            </div>
            {/* <div className="bg-white p-8 rounded-xl border border-border shadow-sm flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <Building2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-heading font-bold text-dark mb-2">Warehouse</h3>
                <p className="text-dark/70 leading-relaxed">Kottara Chowki<br />Mangalore, Karnataka 575006</p>
              </div>
            </div> */}
          </div>
        </div>
      </section>
    </div>
  );
}
