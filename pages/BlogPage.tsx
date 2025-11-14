
import React from 'react';
import { prayers, categories } from '../data';
import PrayerCard from '../components/PrayerCard';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const recentPrayers = prayers.slice(0, 5);

    return (
        <aside className="space-y-8">
            {/* Search */}
            <div>
                <h3 className="font-heading font-bold text-xl text-[var(--text-color-main)] mb-4">Buscar</h3>
                <div className="relative">
                    <input type="search" placeholder="Buscar oraciones..." className="w-full rounded-md border-gray-300 shadow-sm focus:border-[var(--primary-color)] focus:ring-[var(--primary-color)]" />
                     <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
                        <kbd className="inline-flex items-center rounded border border-gray-200 px-2 font-sans text-sm font-medium text-gray-400">
                          ⌘K
                        </kbd>
                    </div>
                </div>
            </div>
            {/* Categories */}
            <div>
                <h3 className="font-heading font-bold text-xl text-[var(--text-color-main)] mb-4">Categorías</h3>
                <ul className="space-y-2">
                    {categories.map(category => (
                        <li key={category.slug}>
                            <Link to={`/categoria/${category.slug}`} className="text-[var(--text-color-secondary)] hover:text-[var(--primary-color)] transition-colors duration-200">
                                {category.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            {/* Recent Posts */}
            <div>
                <h3 className="font-heading font-bold text-xl text-[var(--text-color-main)] mb-4">Recientes</h3>
                <ul className="space-y-4">
                    {recentPrayers.map(prayer => (
                        <li key={prayer.id}>
                           <Link to={`/oracion/${prayer.slug}`} className="font-semibold text-[var(--text-color-secondary)] hover:text-[var(--primary-color)] transition-colors duration-200 leading-tight">
                                {prayer.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </aside>
    )
}


const BlogPage: React.FC = () => {
  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-[var(--text-color-main)] sm:text-5xl font-heading">
            Archivo de Oraciones
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-[var(--text-color-secondary)]">
            Explora nuestra colección completa de oraciones para cada momento de tu vida.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            <main className="lg:col-span-3">
                 <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
                    {prayers.map((prayer) => (
                    <PrayerCard key={prayer.id} prayer={prayer} />
                    ))}
                </div>

                {/* Pagination (Simulated) */}
                <nav className="mt-12 flex items-center justify-center" aria-label="Pagination">
                    <a href="#" className="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50">
                        Anterior
                    </a>
                    <a href="#" aria-current="page" className="relative z-10 inline-flex items-center border border-[var(--primary-color)] bg-blue-50 px-4 py-2 text-sm font-medium text-[var(--primary-color)]">1</a>
                    <a href="#" className="relative inline-flex items-center border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50">2</a>
                    <a href="#" className="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50">
                        Siguiente
                    </a>
                </nav>
            </main>
            <div className="lg:col-span-1">
                <Sidebar />
            </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
