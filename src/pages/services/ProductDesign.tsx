import ServicePageTemplate from "./ServicePageTemplate";
import { getServiceBySlug } from "../../data/services";
import { ProductDesignMock } from "../../components/sections/ServiceMockups";

export default function ProductDesign() {
  const service = getServiceBySlug("product-design");
  if (!service) return null;
  return <ServicePageTemplate service={service} Mockup={ProductDesignMock} />;
}
