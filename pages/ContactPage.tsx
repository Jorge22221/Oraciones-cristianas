
import React from 'react';

const ContactPage: React.FC = () => {
  return (
    <div className="bg-[var(--secondary-color)] py-16 sm:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-[var(--text-color-main)] sm:text-5xl font-heading">
              Ponte en Contacto
            </h1>
            <p className="mt-4 text-lg text-[var(--text-color-secondary)]">
              Nos encantaría saber de ti. Envíanos tus peticiones de oración, testimonios o preguntas.
            </p>
          </div>

          <div className="mt-12 bg-white p-8 rounded-lg shadow-lg">
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 font-heading">
                  Nombre
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="name"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[var(--primary-color)] focus:ring-[var(--primary-color)] sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 font-heading">
                  Email
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[var(--primary-color)] focus:ring-[var(--primary-color)] sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 font-heading">
                  Mensaje
                </label>
                <div className="mt-1">
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[var(--primary-color)] focus:ring-[var(--primary-color)] sm:text-sm"
                  ></textarea>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[var(--primary-color)] hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[var(--primary-color)] font-heading"
                >
                  Enviar Mensaje
                </button>
              </div>
            </form>
          </div>
          <div className="mt-8 text-center text-[var(--text-color-secondary)] text-sm">
            <p>También puedes contactarnos en <a href="mailto:contacto@oracionescristianas.dev" className="font-medium text-[var(--primary-color)] hover:underline">contacto@oracionescristianas.dev</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
