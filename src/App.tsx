import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "@/context/AppContext";
import { Layout } from "@/components/layout/Layout";
import { HomePage } from "@/pages/HomePage";
import { AboutPage } from "@/pages/AboutPage";
import { WorkPage } from "@/pages/WorkPage";
import { CaseStudyPage } from "@/pages/CaseStudyPage";
import { ServicesPage } from "@/pages/ServicesPage";
import { ServicePage } from "@/pages/ServicePage";
import { ContactPage } from "@/pages/ContactPage";
// import { BlogPage } from "@/pages/BlogPage";
// import { BlogPostPage } from "@/pages/BlogPostPage";
import { PrivacyPage } from "@/pages/PrivacyPage";
import { TermsPage } from "@/pages/TermsPage";
import { NotFoundPage } from "@/pages/NotFoundPage";

const basename = import.meta.env.BASE_URL.replace(/\/$/, "") || "/";

export default function App() {
  return (
    <AppProvider>
      <BrowserRouter basename={basename === "/" ? undefined : basename}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="work" element={<WorkPage />} />
            <Route path="work/:slug" element={<CaseStudyPage />} />
            <Route path="services" element={<ServicesPage />} />
            <Route path="services/:slug" element={<ServicePage />} />
            <Route path="contact" element={<ContactPage />} />
            {/* <Route path="blog" element={<BlogPage />} /> */}
            {/* <Route path="blog/:slug" element={<BlogPostPage />} /> */}
            <Route path="privacy" element={<PrivacyPage />} />
            <Route path="terms" element={<TermsPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AppProvider>
  );
}
