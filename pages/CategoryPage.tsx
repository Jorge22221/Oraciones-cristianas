
import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { prayers, categories } from '../data';
import PrayerCard from '../components/PrayerCard';

const CategoryPage: React.FC = () => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  
  const category = categories.find(c => c.slug === categorySlug);
  const prayersInCategory = prayers.filter(p => p.categorySlug === categorySlug);

  if (!category) {
    return <Navigate to="/oraciones" replace />;
  }

  return (
    <div className="bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-[var(--text-color-main)] sm:text-5xl font-heading">
            Categoría: {category.name}
          </h1>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-[var(--text-color-secondary)]">
            Explorando oraciones de {category.name.toLowerCase()}.
          </p>
        </div>

        {prayersInCategory.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {prayersInCategory.map((prayer) => (
              <PrayerCard key={prayer.id} prayer={prayer} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-xl text-[var(--text-color-secondary)]">
              No hay oraciones en esta categoría todavía.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default CategoryPage;
