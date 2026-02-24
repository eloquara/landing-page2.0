import React, { Suspense, lazy, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import { siteData } from './lib/data';

// Lazy Load Pages
const Home = lazy(() => import('./pages/Home'));
const Contact = lazy(() => import('./pages/Contact'));
const GenericPage = lazy(() => import('./pages/GenericPage'));
const HubPage = lazy(() => import('./pages/HubPage'));
const DetailPage = lazy(() => import('./pages/DetailPage'));
const PhilosophyPage = lazy(() => import('./pages/PhilosophyPage'));
const ProcessPage = lazy(() => import('./pages/ProcessPage'));
const ImpactPage = lazy(() => import('./pages/ImpactPage'));
const DiscoveryPage = lazy(() => import('./pages/DiscoveryPage'));
const CaseStudyDetail = lazy(() => import('./pages/CaseStudyDetail'));
const RoadmapPage = lazy(() => import('./pages/RoadmapPage'));
const OrganisationalGrowthPage = lazy(() => import('./pages/OrganisationalGrowthPage'));
const ExecutiveCoachingPage = lazy(() => import('./pages/ExecutiveCoachingPage'));
const PublicSpeakingMasteryPage = lazy(() => import('./pages/PublicSpeakingMasteryPage'));
const TeamWorkshopsPage = lazy(() => import('./pages/TeamWorkshopsPage'));
const SocietalImpactPage = lazy(() => import('./pages/SocietalImpactPage'));
const CustomisedTrainingPage = lazy(() => import('./pages/CustomisedTrainingPage'));
const FindYourVoicePage = lazy(() => import('./pages/FindYourVoicePage'));
const IndividualTransformationPage = lazy(() => import('./pages/IndividualTransformationPage'));

// Loading Spinner Component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-white">
    <div className="w-12 h-12 border-4 border-brand-blue/20 border-t-brand-blue rounded-full animate-spin"></div>
  </div>
);

function App() {
  
  // Recursive function to generate routes from sitemap
  const renderRoutes = (items) => {
    return items.map((item) => {
      // Determine which component to render based on type or path
      let element;

      if (item.path === '/') {
        element = <Home />;
      } else if (item.path === '/contact') {
        element = <Contact />;
      } else if (item.path === '/our-thinking') {
        element = <PhilosophyPage />;
      } else if (item.path === '/our-process') {
        element = <ProcessPage />;
      } else if (item.path === '/our-impact') {
        element = <ImpactPage />;
      } else if (item.path === '/discovery') {
        element = <DiscoveryPage />;
      } else if (item.path === '/programs-and-services/organisational-growth') {
        element = <OrganisationalGrowthPage />;
      } else if (item.path === '/programs-and-services/executive-communication-coaching') {
        element = <ExecutiveCoachingPage />;
      } else if (item.path === '/programs-and-services/public-speaking-mastery') {
        element = <PublicSpeakingMasteryPage />;
      } else if (item.path === '/programs-and-services/team-communication-workshops') {
        element = <TeamWorkshopsPage />;
      } else if (item.path === '/our-impact/societal-impact') {
        element = <SocietalImpactPage />;
      } else if (item.path === '/programs-and-services/customised-training-programs') {
        element = <CustomisedTrainingPage />;
      } else if (item.path === '/individual-transformation/find-your-voice') {
        element = <FindYourVoicePage />;
      } else if (item.path === '/our-impact/individual-transformation') {
        element = <IndividualTransformationPage />;
      } else if (item.type === 'hub') {
        element = <HubPage title={item.title} description={`Welcome to our ${item.title} hub. Explore our specialized programs below.`} items={item.children || []} />;
      } else if (item.type === 'detail') {
        element = <DetailPage title={item.title} />;
      } else {
        // Default to GenericPage for 'page', 'section', 'landing'
        element = <GenericPage title={item.title} subtitle={item.nav?.label === 'Philosophy' ? 'Our core beliefs about communication.' : ''} />;
      }

      const route = <Route key={item.path} path={item.path} element={element} />;
      
      const childRoutes = item.children ? renderRoutes(item.children) : [];
      
      return [route, ...childRoutes];
    });
  };

  const routes = useMemo(() => renderRoutes(siteData.site.sitemap).flat(Infinity), []);

  return (
    <Router basename="/">
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route element={<Layout />}>
            {routes}
            <Route path="/impact/case-study/:id" element={<CaseStudyDetail />} />
          </Route>
          {/* Roadmap Page without Layout for full immersion, or wrapped if preferred. Let's keep it separate for the 'Dark Mode' vibe */}
          <Route path="/methodology/roadmap" element={<RoadmapPage />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
