import React from 'react';
import { Helmet } from 'react-helmet-async';
import { useLocation } from 'react-router-dom';

const siteUrl = 'https://www.eloqaura.com';

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Eloqaura",
  "url": siteUrl,
  "logo": `${siteUrl}/favicon.svg`,
  "description": "Communication training and coaching consultancy. We help leaders, teams, and organisations communicate with clarity, conviction, and purpose.",
  "email": "kiranlingaraj@eloqaura.com",
  "telephone": "+91 7824005002",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Ooty",
    "addressRegion": "Tamilnadu",
    "addressCountry": "IN"
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+91 7824005002",
    "contactType": "customer service",
    "email": "kiranlingaraj@eloqaura.com"
  },
  "sameAs": []
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Eloqaura",
  "url": siteUrl
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ServiceAreaBusiness",
  "name": "Eloqaura",
  "url": siteUrl,
  "description": "Communication training and executive coaching consultancy serving organisations across India and globally.",
  "telephone": "+91 7824005002",
  "email": "kiranlingaraj@eloqaura.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Ooty",
    "addressRegion": "Tamilnadu",
    "addressCountry": "IN"
  },
  "areaServed": [
    { "@type": "City", "name": "Ooty" },
    { "@type": "AdministrativeArea", "name": "Tamilnadu" },
    { "@type": "Country", "name": "India" }
  ]
};

const breadcrumbSchema = (pathname) => {
  const parts = pathname.split('/').filter(Boolean);
  if (parts.length === 0) return null;
  const itemListElement = [{ "@type": "ListItem", "position": 1, "name": "Home", "item": siteUrl }];
  let currentPath = '';
  parts.forEach((part, index) => {
    currentPath += `/${part}`;
    itemListElement.push({
      "@type": "ListItem",
      "position": index + 2,
      "name": part.replace(/-/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
      "item": `${siteUrl}${currentPath}`
    });
  });
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": itemListElement
  };
};

const StructuredData = () => {
  const { pathname } = useLocation();
  const breadcrumbs = breadcrumbSchema(pathname);

  const schemas = [organizationSchema, websiteSchema, localBusinessSchema];
  if (breadcrumbs) schemas.push(breadcrumbs);

  return (
    <Helmet>
      {schemas.map((schema, i) => (
        <script key={i} type="application/ld+json">{JSON.stringify(schema)}</script>
      ))}
    </Helmet>
  );
};

export default StructuredData;
