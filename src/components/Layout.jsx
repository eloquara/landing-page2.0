import React, { useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ChatWidget from './ChatWidget';
import SEOHead from './SEOHead';
import { Outlet, useLocation } from 'react-router-dom';
import { pageMeta } from '../lib/seo';

const getMeta = (pathname) => {
  const exact = pageMeta[pathname];
  if (exact) return exact;
  const prefix = Object.keys(pageMeta).find(key => pathname.startsWith(key) && key !== '/');
  if (prefix) return pageMeta[prefix];
  return {};
};

const Layout = () => {
  const { pathname } = useLocation();
  const meta = getMeta(pathname);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen font-sans bg-white text-slate-800">
      <SEOHead title={meta.title} description={meta.description} canonical={pathname} />
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
};

export default Layout;