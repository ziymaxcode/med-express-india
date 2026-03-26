import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import { WHATSAPP_LINK } from "../data";

export default function WhatsAppButton() {
  const [isPulsing, setIsPulsing] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsPulsing(true);
      setTimeout(() => setIsPulsing(false), 1000); // Pulse duration
    }, 5000); // Every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 bg-dark text-white text-xs font-medium py-1.5 px-3 rounded whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        Chat with us on WhatsApp
        {/* Tooltip triangle */}
        <div className="absolute left-full top-1/2 -translate-y-1/2 border-4 border-transparent border-l-dark"></div>
      </div>
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className={`flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-lg hover:bg-[#20bd5a] transition-colors ${
          isPulsing ? "animate-pulse ring-4 ring-[#25D366]/50" : ""
        }`}
        aria-label="Chat with us on WhatsApp"
      >
        <Phone className="w-7 h-7 fill-current" />
      </a>
    </div>
  );
}
