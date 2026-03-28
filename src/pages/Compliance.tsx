import { motion } from "motion/react";
import { FileText, ShieldCheck, CheckCircle2, Download, Scale, Search } from "lucide-react";

export default function Compliance() {
  return (
    <div className="pt-24 pb-20 bg-secondary min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-dark mb-6">Compliance & Quality</h1>
          <p className="text-lg text-dark/70 max-w-3xl mx-auto leading-relaxed">
            We adhere to the highest standards of regulatory compliance and ethical sourcing. Our commitment to quality ensures that every product we distribute meets stringent medical guidelines.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* GST & IEC */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-10 rounded-2xl border border-border shadow-sm"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <FileText className="w-7 h-7" />
                </div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-dark">Registrations</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-6 bg-secondary rounded-xl border border-border">
                  <h3 className="text-lg font-bold text-dark mb-2">GST Registration</h3>
                  <p className="text-dark/70 mb-4 text-sm">Goods and Services Tax Identification Number for seamless B2B transactions across India.</p>
                  <div className="font-mono text-primary font-medium bg-white px-4 py-2 rounded border border-border inline-block mb-6">
                    29XXXXX1234X1Z5
                  </div>
                  <button className="flex items-center gap-2 text-sm font-medium text-dark hover:text-primary transition-colors">
                    <Download className="w-4 h-4" /> Download Certificate
                  </button>
                </div>

                <div className="p-6 bg-secondary rounded-xl border border-border">
                  <h3 className="text-lg font-bold text-dark mb-2">IEC Certification</h3>
                  <p className="text-dark/70 mb-4 text-sm">Import Export Code issued by DGFT, enabling us to source globally and supply locally.</p>
                  <div className="font-mono text-primary font-medium bg-white px-4 py-2 rounded border border-border inline-block mb-6">
                    0123456789
                  </div>
                  <button className="flex items-center gap-2 text-sm font-medium text-dark hover:text-primary transition-colors">
                    <Download className="w-4 h-4" /> Download Certificate
                  </button>
                </div>
              </div>
            </motion.section>

            {/* Quality Sourcing */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-10 rounded-2xl border border-border shadow-sm"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <ShieldCheck className="w-7 h-7" />
                </div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-dark">Quality Sourcing</h2>
              </div>

              <p className="text-dark/80 leading-relaxed mb-8">
                Our procurement process is rigorous. We vet every supplier to ensure they meet our strict quality criteria before their products enter our distribution network.
              </p>

              <ul className="space-y-4">
                {[
                  "Direct procurement from ISO-certified manufacturers.",
                  "Verification of ISI/NIOSH standards for PPE.",
                  "Batch testing reports reviewed for all pharmaceutical imports.",
                  "Cold chain logistics maintained for sensitive medical preparations.",
                  "Regular facility audits of our primary manufacturing partners."
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                    <span className="text-dark/80">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.section>

            {/* Regulatory Compliance */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-10 rounded-2xl border border-border shadow-sm"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Scale className="w-7 h-7" />
                </div>
                <h2 className="text-2xl md:text-3xl font-heading font-bold text-dark">Regulatory Compliance</h2>
              </div>

              <div className="bg-primary/5 border border-primary/20 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-primary mb-3">Medical Devices Act Compliance</h3>
                <p className="text-dark/80 leading-relaxed text-sm">
                  Med Express India operates in strict accordance with the Medical Devices Rules, 2017 (and subsequent amendments) under the Drugs and Cosmetics Act, 1940. All imported and domestically sourced medical devices are verified for CDSCO (Central Drugs Standard Control Organisation) approval where applicable.
                </p>
              </div>
            </motion.section>

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-primary text-white p-8 rounded-2xl shadow-lg sticky top-32"
            >
             <div className="flex items-center gap-3 mb-6">
              <Search className="w-6 h-6 text-white" />
              <h3 className="text-xl font-heading font-bold text-blue-200">
                HSN Codes We Deal In
              </h3>
            </div>
              
              <p className="text-white/80 text-sm mb-8 leading-relaxed">
                For precise billing and taxation, we categorize our inventory under the following primary Harmonized System of Nomenclature (HSN) codes:
              </p>

              <div className="space-y-4">
                {[
                  { code: "9020", desc: "Respiratory Appliances (N95, Masks)" },
                  { code: "4015", desc: "Surgical & Examination Gloves" },
                  { code: "3004", desc: "Pharmaceutical Preparations" },
                  { code: "6307", desc: "Made-up Articles (Disposables, Aprons)" },
                  { code: "3005", desc: "Wadding, Gauze, Bandages" },
                  { code: "9018", desc: "Medical/Surgical Instruments" }
                ].map((hsn, idx) => (
                  <div key={idx} className="flex justify-between items-center border-b border-white/20 pb-3 last:border-0 last:pb-0">
                    <span className="font-mono font-bold text-accent">{hsn.code}</span>
                    <span className="text-sm text-white/90 text-right">{hsn.desc}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-white/20 text-center">
                <p className="text-xs text-white/60">
                  Need a specific HSN code for your purchase order? Contact our billing department.
                </p>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </div>
  );
}
