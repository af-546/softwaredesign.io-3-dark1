import ServicePageTemplate from "./ServicePageTemplate";
import { getServiceBySlug } from "../../data/services";
import { MobileMock } from "../../components/sections/ServiceMockups";

export default function MobileAppDesign() {
  const service = getServiceBySlug("mobile-app-design");
  if (!service) return null;
  return <ServicePageTemplate service={service} Mockup={MobileMock} />;
}
