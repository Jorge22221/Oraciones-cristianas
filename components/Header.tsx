
import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinkClass = ({ isActive }: { isActive: boolean }) =>
    `py-2 px-3 rounded-md text-sm font-medium font-heading ${
      isActive
        ? 'bg-blue-50 text-[var(--primary-color)]'
        : 'text-gray-600 hover:bg-gray-50 hover:text-[var(--primary-color)]'
    } transition-colors duration-200`;

  const mobileNavLinkClass = ({ isActive }: { isActive: boolean }) =>
   `block py-2 px-4 text-base font-medium rounded-md ${
      isActive
        ? 'bg-blue-50 text-[var(--primary-color)]'
        : 'text-gray-600 hover:bg-gray-100 hover:text-[var(--primary-color)]'
    } transition-colors duration-200`;

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="text-2xl font-bold font-heading text-[var(--primary-color)]">
              Oraciones Cristianas
            </Link>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink to="/" className={navLinkClass}>Inicio</NavLink>
              <NavLink to="/oraciones" className={navLinkClass}>Oraciones</NavLink>
              <NavLink to="/acerca-de" className={navLinkClass}>Acerca de</NavLink>
              <NavLink to="/contacto" className={navLinkClass}>Contacto</NavLink>
            </div>
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="bg-white inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--primary-color)]"
              aria-controls="mobile-menu"
              aria-expanded="false"
            >
              <span className="sr-only">Abrir menú principal</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-4 6h10" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </nav>

      {isOpen && (
        <div className="md:hidden" id="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink to="/" className={mobileNavLinkClass} onClick={() => setIsOpen(false)}>Inicio</NavLink>
            <NavLink to="/oraciones" className={mobileNavLinkClass} onClick={() => setIsOpen(false)}>Oraciones</NavLink>
            <NavLink to="/acerca-de" className={mobileNavLinkClass} onClick={() => setIsOpen(false)}>Acerca de</NavLink>
            <NavLink to="/contacto" className={mobileNavLinkClass} onClick={() => setIsOpen(false)}>Contacto</NavLink>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
