'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { footerColumns, footerLegalLinks } from '@/data/navigation';

export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Subscribe:', email);
  };

  return (
    <footer className="w-full bg-surface">
      <div className="max-w-[1200px] mx-auto px-5 pt-[71px]">
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-8">
          
          {/* Left Side */}
          <div className="flex flex-col gap-8 shrink-0">
            <Link href="/" className="flex items-center gap-[10px] select-none w-fit">
              <div className="w-[28.88px] h-[31.5px] shrink-0">
                <svg width="29" height="32" viewBox="0 0 29 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path d="M10.5 10.5C10.5 4.70101 5.79899 0 0 0V21C0 26.799 4.70101 31.5 10.5 31.5V10.5Z" fill="#D4FB20" />
                  <path d="M18.375 10.5C24.174 10.5 28.875 15.201 28.875 21H21C15.201 21 10.5 16.299 10.5 10.5L18.375 10.5Z" fill="#D4FB20" />
                  <path d="M18.375 31.5C24.174 31.5 28.875 26.799 28.875 21H21C15.201 21 10.5 25.701 10.5 31.5L18.375 31.5Z" fill="#D4FB20" />
                </svg>
              </div>
              <span className="font-clash font-bold text-[24px] leading-none text-main">
                ByteSpace
              </span>
            </Link>

            <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full max-w-[504px]">
              <div className="flex items-center gap-6 h-[52px]">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 h-[52px] px-4 rounded-full bg-white border border-light placeholder:text-light text-main text-[14px] focus:outline-none"
                />
                <button
                  type="submit"
                  className="shrink-0 h-[46px] px-6 rounded-[24px] bg-accent text-main text-[14px] font-medium hover:brightness-105 transition-all"
                >
                  Search
                </button>
              </div>

              <p className="text-muted text-[12px] leading-[18px]">
                By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
              </p>
            </form>
          </div>

          {/* Right Side - Links */}
          <div className="flex gap-12 lg:gap-16 flex-wrap">
            {footerColumns.map((column, colIdx) => (
              <ul key={colIdx} className="flex flex-col gap-4">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-main text-[14px] leading-[20px] hover:text-primary-600 transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-[130px] border-t border-light flex flex-col sm:flex-row items-center justify-between gap-4 py-6">
          <p className="text-muted text-[12px] leading-[18px]">
            &copy; {new Date().getFullYear()} ByteSpace. All rights reserved.
          </p>

          <ul className="flex items-center gap-4">
            {footerLegalLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="text-muted text-[12px] leading-[18px] hover:text-main transition-colors duration-200"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}