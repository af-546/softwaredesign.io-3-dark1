import ServicePageTemplate from "./ServicePageTemplate";
import { getServiceBySlug } from "../../data/services";
import { SaasDesignMock } from "../../components/sections/ServiceMockups";

export default function SaasDesign() {
  const service = getServiceBySlug("saas-design");
  if (!service) return null;
  return <ServicePageTemplate service={service} Mockup={SaasDesignMock} />;
}
