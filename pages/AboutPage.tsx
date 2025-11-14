
import React from 'react';

const AboutPage: React.FC = () => {
  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-[var(--text-color-main)] sm:text-5xl font-heading">
              Sobre Oraciones Cristianas
            </h1>
            <p className="mt-4 text-xl text-[var(--text-color-secondary)]">
              Nuestra Misión, Nuestra Fe, Nuestro Propósito.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
                <img src="https://picsum.photos/600/700?random=10" alt="Manos en oración" className="rounded-lg shadow-lg"/>
            </div>
            <div className="prose prose-lg text-[var(--text-color-main)] font-body">
              <h2 className="font-heading text-[var(--text-color-main)]">Nuestra Misión</h2>
              <p>
                En "Oraciones Cristianas", creemos en el poder transformador de la oración. Nuestra misión es crear un santuario digital donde los creyentes puedan encontrar, compartir y fortalecer su fe a través de oraciones que hablan al corazón en cada etapa de la vida.
              </p>
              <h2 className="font-heading text-[var(--text-color-main)]">Nuestros Valores</h2>
              <ul>
                <li><strong>Fe:</strong> Anclados en la palabra de Dios y la enseñanza de Jesucristo.</li>
                <li><strong>Comunidad:</strong> Fomentando un espacio de apoyo y unidad entre hermanos en la fe.</li>
                <li><strong>Esperanza:</strong> Ofreciendo consuelo y aliento en tiempos de prueba.</li>
                <li><strong>Amor:</strong> Reflejando el amor incondicional de Dios en todo lo que hacemos.</li>
              </ul>
              <h2 className="font-heading text-[var(--text-color-main)]">Declaración de Fe</h2>
              <p>
                Creemos en un solo Dios, Creador del cielo y de la tierra; en Jesucristo, su único Hijo, nuestro Señor y Salvador; y en el Espíritu Santo, nuestro consolador y guía. Creemos que la Biblia es la palabra inspirada de Dios y nuestra guía para la vida.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
