import ServicePageTemplate from "./ServicePageTemplate";
import { getServiceBySlug } from "../../data/services";
import { ErpAdminMock } from "../../components/sections/ServiceMockups";

export default function SalesforceNetSuiteAdmin() {
  const service = getServiceBySlug("salesforce-netsuite-admin");
  if (!service) return null;
  return <ServicePageTemplate service={service} Mockup={ErpAdminMock} />;
}
