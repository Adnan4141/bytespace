'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { navLinks, navActions } from '@/data/navigation';
import LogoMark from '@/components/icons/LogoMark';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-transparent text-neutral-50 relative z-50 h-[120px] flex items-center">
      {/* Full width navbar with balanced padding */}
      <div className="w-full px-6 md:px-12 lg:px-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-[10px] select-none shrink-0 group">
          <div className="w-[28.88px] h-[31.5px] shrink-0 flex items-center justify-center">
            <LogoMark width={29} height={32} className="w-full h-full object-contain" />
          </div>
          <span className="font-clash font-bold text-[24px] leading-none text-neutral-50 tracking-normal">
            ByteSpace
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-neutral-50 hover:text-secondary-400 font-body text-[16px] leading-6 font-normal transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-6 shrink-0">
          {navActions.map((action) => (
            <Link
              key={action.href}
              href={action.href}
              className="text-neutral-50 hover:text-secondary-400 font-body text-[16px] leading-6 font-normal transition-colors duration-200"
            >
              {action.label}
            </Link>
          ))}

          {/* Cart Icon */}
          <Link
            href="/cart"
            aria-label="Cart"
            className="w-5 h-5 inline-flex items-center justify-center text-neutral-50 hover:text-secondary-400 transition-colors duration-200"
          >
            <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-5">
              <path
                d="M14 4H12C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4H2C0.9 4 0 4.9 0 6V18C0 19.1 0.9 20 2 20H14C15.1 20 16 19.1 16 18V6C16 4.9 15.1 4 14 4ZM8 2C9.1 2 10 2.9 10 4H6C6 2.9 6.9 2 8 2ZM14 18H2V6H4V8C4 8.55 4.45 9 5 9C5.55 9 6 8.55 6 8V6H10V8C10 8.55 10.45 9 11 9C11.55 9 12 8.55 12 8V6H14V18Z"
                fill="currentColor"
              />
            </svg>
          </Link>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center gap-4">
          <Link href="/cart" aria-label="Cart" className="w-5 h-5 flex items-center justify-center text-neutral-50">
            <svg width="16" height="20" viewBox="0 0 16 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14 4H12C12 1.79 10.21 0 8 0C5.79 0 4 1.79 4 4H2C0.9 4 0 4.9 0 6V18C0 19.1 0.9 20 2 20H14C15.1 20 16 19.1 16 18V6C16 4.9 15.1 4 14 4ZM8 2C9.1 2 10 2.9 10 4H6C6 2.9 6.9 2 8 2ZM14 18H2V6H4V8C4 8.55 4.45 9 5 9C5.55 9 6 8.55 6 8V6H10V8C10 8.55 10.45 9 11 9C11.55 9 12 8.55 12 8V6H14V18Z"
                fill="currentColor"
              />
            </svg>
          </Link>

          <button
            type="button"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-1 text-neutral-50 hover:text-secondary-400 focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-t border-white/10 bg-primary-600 px-6 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="block text-neutral-50 font-body text-[16px] leading-6 py-1.5 hover:text-secondary-400"
            >
              {link.label}
            </Link>
          ))}

          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            {navActions.map((action) => (
              <Link
                key={action.href}
                href={action.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-neutral-50 font-body text-[16px] leading-6 py-1.5 hover:text-secondary-400"
              >
                {action.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}