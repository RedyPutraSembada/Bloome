"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HeaderType } from "@/app/types/menu";

const HeaderLink: React.FC<{ item: HeaderType }> = ({ item }) => {
  const [submenuOpen, setSubmenuOpen] = useState(false);
  const path = usePathname();
  const [isActive, setIsActive] = useState(false);

  // Check if the current path matches the link or any submenu link
  useEffect(() => {
    const isLinkActive = (path === item.href || (item.submenu && item.submenu.some(subItem => path === subItem.href))) ?? false;
    setIsActive(isLinkActive);
  }, [path, item.href, item.submenu]);

  const handleMouseEnter = () => {
    if (item.submenu && item.submenu.length > 0) {
      setSubmenuOpen(true);
    }
  };

  const handleMouseLeave = () => {
    setSubmenuOpen(false);
  };

  return (
    <div
      className="relative group"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href={item.href}
        className={`text-lg flex items-center text-black hover:text-primary capitalize relative py-1 ${
          isActive ? "text-primary" : ""
        }`}
      >
        {item.label}
        {item.submenu && item.submenu.length > 0 && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1.2em"
            height="1.2em"
            viewBox="0 0 24 24"
            className={`ml-1 transition-transform duration-200 ${
              submenuOpen ? "rotate-180" : ""
            }`}
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              d="m7 10l5 5l5-5"
            />
          </svg>
        )}
      </Link>

      {/* Submenu */}
      {item.submenu && item.submenu.length > 0 && (
        <div
          className={`absolute top-full left-0 mt-1 w-72 bg-white shadow-2xl rounded-lg border border-gray-200 transition-all duration-300 ${
            submenuOpen 
              ? "opacity-100 visible transform translate-y-0 z-[100]" 
              : "opacity-0 invisible transform -translate-y-2 z-[100]"
          }`}
          style={{
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
          }}
        >
          <div className="py-2">
            {item.submenu.map((subItem, index) => {
              const isSubItemActive = path === subItem.href;
              return (
                <Link
                  key={index}
                  href={subItem.href}
                  className={`block px-4 py-3 text-sm transition-colors duration-150 hover:bg-gray-50 ${
                    isSubItemActive
                      ? "bg-primary text-white"
                      : "text-gray-700 hover:text-primary"
                  }`}
                >
                  {subItem.label}
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderLink;
