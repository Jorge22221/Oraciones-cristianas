
import React from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';

// Import Public Pages
import HomePage from './pages/HomePage';
import BlogPage from './pages/BlogPage';
import PrayerPage from './pages/PrayerPage';
import CategoryPage from './pages/CategoryPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import PublicLayout from './components/PublicLayout';

// Import Admin Pages
import AdminLayout from './components/admin/AdminLayout';
import AdminDashboardPage from './pages/admin/AdminDashboardPage';
import AdminPostsPage from './pages/admin/AdminPostsPage';
import AdminNewPostPage from './pages/admin/AdminNewPostPage';
import AdminCustomizePage from './pages/admin/AdminCustomizePage';
import AdminSeoPage from './pages/admin/AdminSeoPage';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Routes>
        {/* Public Site Routes */}
        <Route path="/" element={<PublicLayout />}>
          <Route index element={<HomePage />} />
          <Route path="oraciones" element={<BlogPage />} />
          <Route path="oracion/:slug" element={<PrayerPage />} />
          <Route path="categoria/:categorySlug" element={<CategoryPage />} />
          <Route path="acerca-de" element={<AboutPage />} />
          <Route path="contacto" element={<ContactPage />} />
        </Route>

        {/* Admin Panel Routes */}
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminDashboardPage />} />
          <Route path="dashboard" element={<AdminDashboardPage />} />
          <Route path="posts" element={<AdminPostsPage />} />
          <Route path="posts/nuevo" element={<AdminNewPostPage />} />
          <Route path="personalizar" element={<AdminCustomizePage />} />
          <Route path="seo" element={<AdminSeoPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
