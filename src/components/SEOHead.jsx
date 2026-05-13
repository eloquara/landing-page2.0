import React from 'react';
import { Helmet } from 'react-helmet-async';

const defaultTitle = 'Eloqaura — Communication Training & Executive Coaching';
const defaultDescription = 'Bridging the gap between intent and impact. We empower leaders to speak with clarity, conviction, and purpose through executive coaching, team workshops, and public speaking mastery.';
const siteUrl = 'https://www.eloqaura.com';

const SEOHead = ({ title, description, canonical, ogType = 'website', noindex = false }) => {
  const pageTitle = title ? `${title} | Eloqaura` : defaultTitle;
  const pageDesc = description || defaultDescription;
  const canonicalUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;

  return (
    <Helmet>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDesc} />
      <link rel="canonical" href={canonicalUrl} />
      {noindex && <meta name="robots" content="noindex" />}
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDesc} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:type" content={ogType} />
      <meta property="og:site_name" content="Eloqaura" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={pageTitle} />
      <meta name="twitter:description" content={pageDesc} />
    </Helmet>
  );
};

export default SEOHead;
