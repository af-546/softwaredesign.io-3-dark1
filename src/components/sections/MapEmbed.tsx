import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { siteConfig } from "../../data/site";

// Custom blue accent marker as SVG data URI
const customIcon = L.divIcon({
  className: "custom-map-marker",
  html: `
    <div style="position: relative; width: 40px; height: 50px;">
      <svg width="40" height="50" viewBox="0 0 40 50" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <filter id="markerShadow" x="-50%" y="-50%" width="200%" height="200%">
            <feDropShadow dx="0" dy="3" stdDeviation="3" flood-color="rgba(10,10,10,0.25)" />
          </filter>
        </defs>
        <path
          d="M20 0 C9 0 0 8.5 0 19 C0 33 20 50 20 50 C20 50 40 33 40 19 C40 8.5 31 0 20 0 Z"
          fill="#0F62FE"
          filter="url(#markerShadow)"
        />
        <circle cx="20" cy="19" r="6" fill="#FFFFFF" />
      </svg>
    </div>
  `,
  iconSize: [40, 50],
  iconAnchor: [20, 50],
  popupAnchor: [0, -50],
});

interface MapEmbedProps {
  height?: string;
}

export default function MapEmbed({ height = "480px" }: MapEmbedProps) {
  const { lat, lng } = siteConfig.address.coords;

  return (
    <div
      className="w-full rounded-2xl overflow-hidden border border-border-subtle relative"
      style={{ height }}
      role="img"
      aria-label={`Map showing SoftwareDesign.io office location at ${siteConfig.address.street}, ${siteConfig.address.city}, ${siteConfig.address.zip}`}
    >
      <MapContainer
        center={[lat, lng]}
        zoom={15}
        scrollWheelZoom={false}
        style={{ height: "100%", width: "100%" }}
        zoomControl={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
          url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
        />
        <Marker position={[lat, lng]} icon={customIcon}>
          <Popup>
            <div>
              <div className="font-medium text-ink-primary mb-0.5">SoftwareDesign.io</div>
              <div className="text-ink-tertiary text-body-sm">
                {siteConfig.address.street}
                <br />
                {siteConfig.address.city}, {siteConfig.address.zip}
              </div>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}
