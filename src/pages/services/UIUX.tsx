import ServicePageTemplate from "./ServicePageTemplate";
import { getServiceBySlug } from "../../data/services";
import { UIUXMock } from "../../components/sections/ServiceMockups";

export default function UIUX() {
  const service = getServiceBySlug("ui-ux");
  if (!service) return null;
  return <ServicePageTemplate service={service} Mockup={UIUXMock} />;
}
