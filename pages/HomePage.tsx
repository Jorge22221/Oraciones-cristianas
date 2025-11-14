
import React from 'react';
import { Link } from 'react-router-dom';
import { prayers, categories } from '../data';
import PrayerCard from '../components/PrayerCard';

const HomePage: React.FC = () => {
  const latestPrayers = prayers.slice(0, 3);
  const popularCategories = categories.slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-800 text-white">
        <div className="absolute inset-0">
          <img src="https://picsum.photos/1600/800?grayscale&blur=2" alt="Fondo inspirador" className="h-full w-full object-cover opacity-30" />
        </div>
        <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl font-heading">
            Encuentra Fortaleza y Paz en la Oración
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-300">
            Un refugio espiritual para nutrir tu fe y encontrar consuelo en la palabra de Dios.
          </p>
          <div className="mt-10">
            <Link
              to="/oraciones"
              className="inline-block rounded-md border border-transparent bg-[var(--primary-color)] px-8 py-3 text-base font-medium text-white shadow-lg transition hover:bg-opacity-90 sm:px-10 font-heading"
            >
              Ver Últimas Oraciones
            </Link>
          </div>
        </div>
      </section>

      {/* Latest Prayers Section */}
      <section className="py-16 sm:py-24 bg-[var(--secondary-color)]">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--text-color-main)] sm:text-4xl font-heading">
              Últimas Oraciones
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-[var(--text-color-secondary)]">
              Meditaciones recientes para inspirar tu jornada espiritual diaria.
            </p>
          </div>
          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {latestPrayers.map((prayer) => (
              <PrayerCard key={prayer.id} prayer={prayer} />
            ))}
          </div>
        </div>
      </section>

      {/* Popular Categories Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[var(--text-color-main)] sm:text-4xl font-heading">
              Categorías Populares
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-[var(--text-color-secondary)]">
              Encuentra la oración perfecta para cada una de tus necesidades.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {popularCategories.map((category) => (
              <Link
                key={category.slug}
                to={`/categoria/${category.slug}`}
                className="group block text-center p-6 bg-gray-50 rounded-lg shadow-sm hover:bg-[var(--primary-color)] hover:shadow-md transition-all duration-300"
              >
                <h3 className="font-heading text-lg font-semibold text-gray-800 group-hover:text-white">{category.name}</h3>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimony Section */}
      <section className="py-16 sm:py-24 bg-cover bg-center" style={{ backgroundImage: "url('https://picsum.photos/1600/600?random=5&blur=1')" }}>
        <div className="bg-black bg-opacity-50 py-16 sm:py-24">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
            <blockquote className="max-w-3xl mx-auto">
              <p className="text-2xl font-semibold italic">
                "La oración es el momento en que el cielo se inclina para escuchar el susurro de un corazón humilde. Es el puente entre nuestra debilidad y Su infinita fortaleza."
              </p>
              <footer className="mt-6 font-heading text-lg">- Un Creyente Agradecido</footer>
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
