"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "../globals.css";

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const user = localStorage.getItem("user");
    setIsLoggedIn(!!user);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <header className="sticky top-0 z-50 w-full bg-white dark:bg-gray-900 border-b border-gray-200 py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          
          {/* Logo Section */}
          <Link href="/" className="font-bold text-xl text-green-600">
            VerdeWeather
          </Link>

          {/* Nav Links - Yahan 'hidden' hata diya taake saare buttons nazar aayein */}
          <nav className="flex items-center gap-6">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                href={link.href}
                className={`text-sm font-bold transition-colors ${
                  pathname === link.href ? "text-green-600" : "text-gray-600 dark:text-gray-300 hover:text-green-500"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>
        
              <Link href="/weather" className="text-green-600 font-bold text-xs border border-green-600 px-3 py-1 rounded-full">
                DASHBOARD
              </Link>
          </div>
      </header>

      {modalType && <AuthModal type={modalType} onClose={() => setModalType(null)} />}
    </>
  );
}