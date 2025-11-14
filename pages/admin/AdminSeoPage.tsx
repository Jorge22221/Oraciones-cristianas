
import React, { useState } from 'react';
import type { SeoData } from '../../types';

const AdminSeoPage: React.FC = () => {
    const [seoData, setSeoData] = useState<SeoData>({
        title: 'Oraciones Cristianas - Fortaleza y Paz en la Oración',
        description: 'Encuentra fortaleza, consuelo y guía a través de poderosas oraciones cristianas para cada momento de tu vida. Un espacio de fe y esperanza.',
        keywords: 'oraciones cristianas, oración, fe, Dios, Jesucristo, sanación, gratitud, fortaleza'
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setSeoData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Configuración SEO guardada con éxito (simulación).');
    };

    return (
        <div>
            <h1 className="text-xl font-semibold text-gray-900">Herramientas SEO</h1>
            <p className="mt-2 text-sm text-gray-700">
                Optimiza el SEO global para tu página de inicio.
            </p>

            <form onSubmit={handleSubmit} className="mt-8 max-w-2xl space-y-6 bg-white p-6 rounded-lg shadow">
                 <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                        Meta Título Global
                    </label>
                    <div className="mt-1">
                        <input
                            type="text"
                            name="title"
                            id="title"
                            value={seoData.title}
                            onChange={handleChange}
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                    </div>
                    <p className="mt-2 text-sm text-gray-500">El título que aparece en la pestaña del navegador y en los resultados de búsqueda.</p>
                </div>
                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                        Meta Descripción Global
                    </label>
                    <div className="mt-1">
                        <textarea
                            name="description"
                            id="description"
                            rows={3}
                            value={seoData.description}
                            onChange={handleChange}
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                    </div>
                    <p className="mt-2 text-sm text-gray-500">Un resumen breve de tu página para los motores de búsqueda.</p>
                </div>
                <div>
                    <label htmlFor="keywords" className="block text-sm font-medium text-gray-700">
                        Palabras Clave
                    </label>
                    <div className="mt-1">
                        <input
                            type="text"
                            name="keywords"
                            id="keywords"
                            value={seoData.keywords}
                            onChange={handleChange}
                            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                        />
                    </div>
                    <p className="mt-2 text-sm text-gray-500">Palabras clave relevantes separadas por comas.</p>
                </div>
                <div className="text-right">
                    <button
                        type="submit"
                        className="inline-flex justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-indigo-700"
                    >
                        Guardar Configuración SEO
                    </button>
                </div>
            </form>
        </div>
    );
};

export default AdminSeoPage;
