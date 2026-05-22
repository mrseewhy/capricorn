const WhatsAppFloat = ({
  phoneNumber = "27795833788",
  message = "Hello I am from your website! Capricorn Global Properties",
}) => {
  const url = `https://wa.me/${phoneNumber}${message ? `?text=${encodeURIComponent(message)}` : ""}`;

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] rounded-full shadow-lg hover:scale-110 hover:shadow-xl transition-all duration-300"
    >
      {/* Ping animation ring */}
      <span className="absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-40 animate-ping" />

      {/* WhatsApp SVG icon */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="w-8 h-8 fill-white relative z-10"
      >
        <path d="M16 0C7.163 0 0 7.163 0 16c0 2.822.736 5.469 2.027 7.774L0 32l8.454-2.01A15.938 15.938 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.267 13.267 0 0 1-6.748-1.833l-.484-.287-5.017 1.194 1.234-4.874-.317-.501A13.227 13.227 0 0 1 2.667 16C2.667 8.636 8.636 2.667 16 2.667S29.333 8.636 29.333 16 23.364 29.333 16 29.333zm7.27-9.862c-.398-.199-2.354-1.162-2.718-1.294-.364-.133-.629-.199-.894.199-.265.398-1.028 1.294-1.26 1.559-.232.265-.464.298-.862.1-.398-.199-1.681-.619-3.202-1.977-1.183-1.056-1.981-2.36-2.213-2.758-.232-.398-.025-.613.174-.811.179-.178.398-.464.597-.696.199-.232.265-.398.398-.663.133-.265.066-.497-.033-.696-.1-.199-.894-2.154-1.225-2.949-.322-.774-.649-.669-.894-.681l-.762-.013c-.265 0-.696.1-.1060.497-.364.398-1.39 1.359-1.39 3.314 0 1.955 1.423 3.844 1.621 4.109.199.265 2.8 4.274 6.785 5.993.948.409 1.688.653 2.265.836.952.302 1.818.259 2.502.157.763-.113 2.354-.963 2.686-1.893.332-.93.332-1.727.232-1.893-.099-.166-.364-.265-.762-.464z" />
      </svg>
    </a>
  );
};

export default WhatsAppFloat;
