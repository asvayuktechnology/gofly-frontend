"use client";

interface MapSectionProps {
  title?: string;
  mapUrl: string;
  width?: string;   // e.g. "100%", "600px"
  height?: string;  // e.g. "400px"
}

export default function MapSection({
  title,
  mapUrl,
  width = "100%",
  height = "400px",
}: MapSectionProps) {
  return (
    <div>
      {/* Title */}
      {title && (
        <h4 className="text-2xl font-semibold mb-4">{title}</h4>
      )}

      {/* Map */}
      <div
        className="rounded-2xl overflow-hidden shadow-md w-full"
        style={{ width, height }} // ✅ correct way for dynamic sizing
      >
        <iframe
          src={mapUrl}
          className="w-full h-full border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
          title={title || "Map location"} // ✅ accessibility fix
        />
      </div>
    </div>
  );
}