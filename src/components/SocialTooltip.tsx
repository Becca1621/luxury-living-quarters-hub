import React, { useEffect, useState } from 'react';
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Phone, Facebook, Instagram, MapPin } from "lucide-react";

const SocialTooltip = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Toggle visibility after a brief delay
    setTimeout(() => setIsVisible(true), 200);  // Delays for initial load
  }, []);

  return (
    <div
      id="tooltip-container"
      className={`fixed bottom-2 right-2 z-[60] flex flex-col gap-2 p-2 rounded-lg transition-all duration-500 transform ${
        isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'
      }`}
    >
      {/* Phone Icon */}
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            href="tel:+251952111000"
            className="bg-luxury-grey/60 hover:bg-luxury-cream p-2 rounded-full transition-colors duration-300"
            aria-label="Call us"
          >
            <Phone className="h-5 w-5 text-luxury-green" />
          </a>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>Call Us</p>
        </TooltipContent>
      </Tooltip>

      {/* Facebook Icon */}
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            href="https://www.facebook.com/people/Keymark-Properties/61575888689741/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-luxury-grey/60 hover:bg-luxury-cream p-2 rounded-full transition-colors duration-300"
            aria-label="Visit our Facebook page"
          >
            <Facebook className="h-5 w-5 text-luxury-green" />
          </a>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>Visit our Facebook</p>
        </TooltipContent>
      </Tooltip>

      {/* Instagram Icon */}
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            href="https://www.instagram.com/keymark_properties"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-luxury-grey/60 hover:bg-luxury-cream p-2 rounded-full transition-colors duration-300"
            aria-label="Follow us on Instagram"
          >
            <Instagram className="h-5 w-5 text-luxury-green" />
          </a>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>Follow on Instagram</p>
        </TooltipContent>
      </Tooltip>

      {/* Location Icon */}
      <Tooltip>
        <TooltipTrigger asChild>
          <a
            href="https://maps.app.goo.gl/ZVrQyzisc843eJUV8"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-luxury-grey/60 hover:bg-luxury-cream p-2 rounded-full transition-colors duration-300"
            aria-label="Find our location"
          >
            <MapPin className="h-5 w-5 text-luxury-green" />
          </a>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>Get Directions</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
};

export default SocialTooltip;
