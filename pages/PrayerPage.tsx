
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { prayers } from '../data';

const PrayerPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const prayer = prayers.find((p) => p.slug === slug);

  if (!prayer) {
    return <Navigate to="/oraciones" replace />;
  }

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <article>
            <header className="mb-8">
              <p className="text-base font-semibold text-[var(--primary-color)] font-heading">
                <Link to={`/categoria/${prayer.categorySlug}`} className="hover:underline">
                  {prayer.category}
                </Link>
              </p>
              <h1 className="mt-2 text-4xl font-bold tracking-tight text-[var(--text-color-main)] sm:text-5xl font-heading">
                {prayer.title}
              </h1>
              <div className="mt-4 flex items-center space-x-4 text-sm text-[var(--text-color-secondary)]">
                <span>{prayer.date}</span>
                <span>&middot;</span>
                <span>Por {prayer.author}</span>
              </div>
            </header>

            <figure>
              <img className="w-full rounded-lg shadow-lg mb-8" src={prayer.image} alt={prayer.title} />
            </figure>

            <div className="prose prose-lg max-w-none text-[var(--text-color-main)]">
              {prayer.content.map((paragraph, index) => (
                <p key={index} className="mb-6 leading-relaxed font-body">
                  {paragraph}
                </p>
              ))}
            </div>
            
            <footer className="mt-12">
              <div className="flex items-center space-x-4">
                <span className="font-bold font-heading">Compartir:</span>
                <a href="#" className="text-gray-500 hover:text-blue-600 transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path></svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-sky-500 transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.71v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
                </a>
                <a href="#" className="text-gray-500 hover:text-green-500 transition-colors">
                  <span className="sr-only">WhatsApp</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.38 1.25 4.81L2 22l5.3-1.38c1.37.71 2.93 1.12 4.55 1.12 5.46 0 9.91-4.45 9.91-9.91S17.5 2 12.04 2zM12.04 20.15c-1.48 0-2.91-.4-4.19-1.11l-.3-.18-3.12.81.83-3.04-.2-.31c-.8-1.32-1.23-2.84-1.23-4.41 0-4.54 3.69-8.23 8.23-8.23 4.54 0 8.23 3.69 8.23 8.23 0 4.54-3.69 8.23-8.23 8.23zm4.52-6.19c-.25-.12-1.47-.72-1.7-.81-.23-.08-.39-.12-.56.12-.17.25-.64.81-.79.97-.15.17-.29.19-.54.06-.25-.12-1.06-.39-2.02-1.25-.75-.67-1.25-1.5-1.4-1.75-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.55-.42h-.5c-.15 0-.39.04-.6.19-.2.15-.79.78-.79 1.88 0 1.1.81 2.18.92 2.34.12.15 1.59 2.42 3.86 3.43.54.24 1 .38 1.34.48.55.17 1.05.14 1.45.09.45-.06 1.47-.6 1.68-1.18.21-.58.21-1.07.15-1.18-.06-.12-.22-.19-.47-.31z"></path></svg>
                </a>
              </div>
            </footer>

            {/* Simulated Comments Section */}
            <div className="mt-16 pt-8 border-t border-gray-200">
                <h2 className="text-2xl font-bold font-heading text-[var(--text-color-main)]">Comentarios</h2>
                <div className="mt-6 bg-gray-50 p-6 rounded-lg text-center text-gray-500">
                    <p>La sección de comentarios está actualmente en desarrollo. ¡Vuelve pronto!</p>
                </div>
            </div>

          </article>
        </div>
      </div>
    </div>
  );
};

export default PrayerPage;
