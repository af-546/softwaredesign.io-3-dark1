import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { lazy, Suspense, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Nav from "./components/layout/Nav";
import Footer from "./components/layout/Footer";
import SmoothScrollProvider from "./components/effects/SmoothScrollProvider";

// Eagerly loaded
import Home from "./pages/Home";

// Lazy-loaded
const About = lazy(() => import("./pages/About"));
const Contact = lazy(() => import("./pages/Contact"));
const Work = lazy(() => import("./pages/Work"));
const CaseStudy = lazy(() => import("./pages/CaseStudy"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const NotFound = lazy(() => import("./pages/NotFound"));
const WebDesign = lazy(() => import("./pages/services/WebDesign"));
const SaasDesign = lazy(() => import("./pages/services/SaasDesign"));
const UIUX = lazy(() => import("./pages/services/UIUX"));
const ProductDesign = lazy(() => import("./pages/services/ProductDesign"));
const SalesforceNetSuiteAdmin = lazy(() => import("./pages/services/SalesforceNetSuiteAdmin"));
const MobileAppDesign = lazy(() => import("./pages/services/MobileAppDesign"));

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

function PageWrapper({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: [0.32, 0.72, 0, 1] }}
    >
      {children}
    </motion.div>
  );
}

export default function App() {
  const location = useLocation();

  return (
    <SmoothScrollProvider>
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>
      <ScrollToTop />
      <Nav />
      <main id="main-content">
        <Suspense fallback={<div className="min-h-[60vh]" />}>
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={
                  <PageWrapper>
                    <Home />
                  </PageWrapper>
                }
              />
              <Route
                path="/about"
                element={
                  <PageWrapper>
                    <About />
                  </PageWrapper>
                }
              />
              <Route
                path="/contact"
                element={
                  <PageWrapper>
                    <Contact />
                  </PageWrapper>
                }
              />
              <Route
                path="/work"
                element={
                  <PageWrapper>
                    <Work />
                  </PageWrapper>
                }
              />
              <Route
                path="/work/:slug"
                element={
                  <PageWrapper>
                    <CaseStudy />
                  </PageWrapper>
                }
              />
              <Route
                path="/services/web-design"
                element={
                  <PageWrapper>
                    <WebDesign />
                  </PageWrapper>
                }
              />
              <Route
                path="/services/saas-design"
                element={
                  <PageWrapper>
                    <SaasDesign />
                  </PageWrapper>
                }
              />
              <Route
                path="/services/ui-ux"
                element={
                  <PageWrapper>
                    <UIUX />
                  </PageWrapper>
                }
              />
              <Route
                path="/services/product-design"
                element={
                  <PageWrapper>
                    <ProductDesign />
                  </PageWrapper>
                }
              />
              <Route
                path="/services/salesforce-netsuite-admin"
                element={
                  <PageWrapper>
                    <SalesforceNetSuiteAdmin />
                  </PageWrapper>
                }
              />
              <Route
                path="/services/frontend-engineering"
                element={<Navigate to="/services/salesforce-netsuite-admin" replace />}
              />
              <Route
                path="/services/mobile-app-design"
                element={
                  <PageWrapper>
                    <MobileAppDesign />
                  </PageWrapper>
                }
              />
              <Route
                path="/privacy"
                element={
                  <PageWrapper>
                    <Privacy />
                  </PageWrapper>
                }
              />
              <Route
                path="/terms"
                element={
                  <PageWrapper>
                    <Terms />
                  </PageWrapper>
                }
              />
              <Route
                path="*"
                element={
                  <PageWrapper>
                    <NotFound />
                  </PageWrapper>
                }
              />
            </Routes>
          </AnimatePresence>
        </Suspense>
      </main>
      <Footer />
    </SmoothScrollProvider>
  );
}
