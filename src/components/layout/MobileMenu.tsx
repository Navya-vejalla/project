import React from "react";
import { NavLinks } from "./NavLinks";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void; // Function to close the mobile menu
}

export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="md:hidden fixed inset-0 z-40 bg-white dark:bg-gray-900">
      <NavLinks
        className="pt-20 pb-3 space-y-1 px-4 flex flex-col"
        onLinkClick={onClose} // Call the onClose handler to close the menu
      />
    </div>
  );
}
