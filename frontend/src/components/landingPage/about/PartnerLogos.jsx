import React, { useEffect, useRef } from "react";

const PartnerLogos = () => {
  const logos = [
    {
      name: "Al-Azhar University",
      logo: "https://images.unsplash.com/photo-1577096794592-797c9fa24d13?w=100&h=100&fit=crop&q=80",
    },
    {
      name: "Islamic University of Madinah",
      logo: "https://images.unsplash.com/photo-1585036156171-384164a8c675?w=100&h=100&fit=crop&q=80",
    },
    {
      name: "International Islamic University Malaysia",
      logo: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7dd?w=100&h=100&fit=crop&q=80",
    },
    {
      name: "University of Jordan",
      logo: "https://images.unsplash.com/photo-1590076215667-875d4ef2d7dd?w=100&h=100&fit=crop&q=80",
    },
    // Add more partner logos as needed
  ];

  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const cloneContent = () => {
      const content = scrollContainer.innerHTML;
      scrollContainer.innerHTML += content; // Clone content for seamless scrolling
    };

    cloneContent();

    const scroll = () => {
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0; // Reset to start when reaching the end
      } else {
        scrollContainer.scrollLeft += 1; // Increment scrolling
      }
    };

    const intervalId = setInterval(scroll, 20); // Adjust interval for speed

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="relative mt-10">
      <div
        ref={scrollRef}
        className="overflow-hidden whitespace-nowrap flex gap-12"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        <div className="inline-flex gap-12 py-4">
          {/* First set of logos */}
          {logos.map((partner, index) => (
            <div
              key={`logo-1-${index}`}
              className="flex flex-col items-center space-y-2"
            >
              <img
                src={partner.logo}
                alt={partner.name}
                className="w-20 h-20 object-contain filter dark:brightness-90"
              />
              <span className="text-sm text-gray-600 dark:text-gray-400">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PartnerLogos;
