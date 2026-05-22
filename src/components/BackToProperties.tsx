import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const BackToProperties = () => {
  return (
    <div
      style={{ background: "var(--color-ivory-100)" }}
      className="flex items-center gap-2 text-sm pb-8 cursor-pointer text-center justify-center"
    >
      <Link
        to="/our-properties"
        className="flex items-center gap-1 text-gold-500 hover:text-gold-600 transition-colors duration-200"
      >
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontWeight: 500,
            color: "var(--color-gold-500)",
          }}
        >
          Back to Properties
        </span>
        <ArrowLeft size={12} style={{ transform: "rotate(180deg)" }} />
      </Link>
    </div>
  );
};

export default BackToProperties;
