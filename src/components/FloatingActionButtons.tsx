
import { Phone, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const FloatingActionButtons = () => {
  const handleCallClick = () => {
    window.location.href = "tel:+919898408301";
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-40">
      {/* Call Button */}
      <button
        onClick={handleCallClick}
        className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        aria-label="Call us"
      >
        <Phone className="w-5 h-5" />
      </button>
      
      {/* Request Quote Button */}
      <Link
        to="/quote"
        className="bg-purple-500 hover:bg-purple-600 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 inline-block"
        aria-label="Request Quote"
      >
        <FileText className="w-5 h-5" />
      </Link>
    </div>
  );
};

export default FloatingActionButtons;
