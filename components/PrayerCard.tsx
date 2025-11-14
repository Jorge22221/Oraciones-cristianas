
import React from 'react';
import { Link } from 'react-router-dom';
import type { Prayer } from '../types';

interface PrayerCardProps {
  prayer: Prayer;
}

const PrayerCard: React.FC<PrayerCardProps> = ({ prayer }) => {
  return (
    <article className="group flex flex-col overflow-hidden rounded-lg bg-white shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
      <Link to={`/oracion/${prayer.slug}`} className="block">
        <img src={prayer.image} alt={prayer.title} className="h-48 w-full object-cover transition-transform duration-300 group-hover:scale-105" />
      </Link>
      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <p className="text-sm font-medium text-[var(--primary-color)]">
            <Link to={`/categoria/${prayer.categorySlug}`} className="hover:underline font-heading">
              {prayer.category}
            </Link>
          </p>
          <Link to={`/oracion/${prayer.slug}`} className="mt-2 block">
            <h3 className="text-xl font-bold font-heading text-[var(--text-color-main)] group-hover:text-[var(--primary-color)] transition-colors">
              {prayer.title}
            </h3>
            <p className="mt-3 text-sm text-[var(--text-color-secondary)]">
              {prayer.excerpt}
            </p>
          </Link>
        </div>
        <div className="mt-6">
          <Link 
            to={`/oracion/${prayer.slug}`} 
            className="inline-block rounded-full bg-[var(--primary-color)] px-4 py-2 text-sm font-semibold text-white transition hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-[var(--primary-color)] focus:ring-offset-2 font-heading"
          >
            Leer Más
          </Link>
        </div>
      </div>
    </article>
  );
};

export default PrayerCard;
