import React from 'react';

const WhatsAppButton = () => {
  const phoneNumber = "+254723166711"; // Replace with your WhatsApp phone number
  const message = "Hello! I have a question"; // Default message

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-24 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-50 transition duration-300"
      aria-label="Chat with us on WhatsApp"
    >
      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" stroke="none">
        <path d="M12.04 2.5C6.57 2.5 2 6.9 2 12.2c0 2.05.68 3.93 1.84 5.49L2 22.5l4.82-1.58A10.1 10.1 0 0 0 12.04 22C17.5 22 22 17.62 22 12.2 22 6.9 17.52 2.5 12.04 2.5zM12.04 20.1c-1.63 0-3.17-.49-4.47-1.33l-3.16 1.04.97-3.2A7.71 7.71 0 0 1 4.04 12.2c0-4.33 3.59-7.87 8-7.87s8 3.54 8 7.87c0 4.33-3.59 7.87-8 7.87z"/>
        <path d="M17.15 14.5c-.28-.13-1.63-.8-1.88-.9-.26-.1-.45-.13-.64.13-.19.25-.74.9-.9 1.09-.16.19-.35.2-.64.07-.29-.13-1.22-.45-2.32-1.45-.86-.78-1.44-1.73-1.61-2.03-.17-.3-.02-.46.13-.6.13-.13.29-.35.43-.53.15-.19.19-.32.29-.51.1-.19.05-.38-.02-.51-.07-.13-.64-1.55-.88-2.12-.23-.55-.47-.47-.64-.47-.19-.01-.38-.01-.58-.01-.2 0-.51.07-.77.38-.25.32-1.02 1.02-1.02 2.48 0 1.46 1.04 2.87 1.19 3.07.13.19 2.04 3.27 4.97 4.32.7.3 1.25.48 1.67.62.7.22 1.33.19 1.83.12.56-.09 1.63-.67 1.87-1.32.23-.64.23-1.2.16-1.32-.07-.12-.26-.19-.54-.32z"/>
      </svg>
    </a>
  );
};

export default WhatsAppButton;
