
import React from 'react';
import { useTheme } from '../../hooks/useTheme';

const AdminCustomizePage: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTheme(prevTheme => ({ ...prevTheme, primaryColor: e.target.value }));
  };

  const handleFontChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTheme(prevTheme => ({ ...prevTheme, fontTheme: e.target.value }));
  };

  return (
    <div>
      <h1 className="text-xl font-semibold text-gray-900">Personalización del Sitio</h1>
      <p className="mt-2 text-sm text-gray-700">
        Cambia la apariencia de tu sitio en tiempo real. Los cambios se aplicarán al instante.
      </p>

      <div className="mt-8 max-w-2xl space-y-8">
        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-medium text-gray-900">Cambiar Tema/Colores</h2>
          <div className="mt-4">
            <label htmlFor="primary-color" className="block text-sm font-medium text-gray-700">
              Color Primario (Acentos, botones)
            </label>
            <div className="mt-1 flex items-center space-x-3">
              <input
                type="color"
                id="primary-color"
                name="primary-color"
                value={theme.primaryColor}
                onChange={handleColorChange}
                className="h-10 w-10 rounded-md border-gray-300"
              />
              <input 
                type="text" 
                value={theme.primaryColor} 
                onChange={handleColorChange}
                className="block w-full max-w-xs rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
              />
            </div>
            <p className="mt-2 text-sm text-gray-500">Selecciona el color principal para tu sitio.</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-medium text-gray-900">Cambiar Fuentes</h2>
          <div className="mt-4">
            <label htmlFor="font-theme" className="block text-sm font-medium text-gray-700">
              Combinación de Fuentes
            </label>
            <select
              id="font-theme"
              name="font-theme"
              value={theme.fontTheme}
              onChange={handleFontChange}
              className="mt-1 block w-full rounded-md border-gray-300 py-2 pl-3 pr-10 text-base focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
            >
              <option value="font-theme-lato-lora">Moderno (Lato / Lora)</option>
              <option value="font-theme-montserrat-merriweather">Clásico (Montserrat / Merriweather)</option>
            </select>
            <p className="mt-2 text-sm text-gray-500">Elige una combinación de fuentes para títulos y cuerpo de texto.</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="text-lg font-medium text-gray-900">Editar Texto de la Página de Inicio</h2>
          <div className="mt-4 space-y-4">
            <div>
                <label htmlFor="hero-title" className="block text-sm font-medium text-gray-700">
                    Título Principal (Hero)
                </label>
                <input
                    type="text"
                    name="hero-title"
                    id="hero-title"
                    defaultValue="Encuentra Fortaleza y Paz en la Oración"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                />
            </div>
            <div>
                 <label htmlFor="about-text" className="block text-sm font-medium text-gray-700">
                    Texto "Acerca de"
                </label>
                <textarea
                    name="about-text"
                    id="about-text"
                    rows={3}
                    defaultValue="Nuestra misión es crear un santuario digital..."
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
                />
            </div>
            <div className="text-right">
                <button type="button" className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700">
                    Guardar Cambios
                </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminCustomizePage;
