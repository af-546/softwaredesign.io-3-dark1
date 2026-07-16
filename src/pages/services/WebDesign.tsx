import ServicePageTemplate from "./ServicePageTemplate";
import { getServiceBySlug } from "../../data/services";
import { WebDesignMock } from "../../components/sections/ServiceMockups";

export default function WebDesign() {
  const service = getServiceBySlug("web-design");
  if (!service) return null;
  return <ServicePageTemplate service={service} Mockup={WebDesignMock} />;
}
