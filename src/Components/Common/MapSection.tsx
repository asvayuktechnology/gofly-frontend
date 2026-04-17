"use client";

interface MapSectionProps {
    title?: string;
    mapUrl: string;
}

export default function MapSection({
    title = "Package Destination Map",
    mapUrl,
}: MapSectionProps) {
    return (
        <div className="mb-16">
            {/* Title */}
            <h4 className="text-2xl font-semibold mb-4">{title}</h4>

            {/* Map */}
            <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-md">
                <iframe
                    src={mapUrl}
                    className="w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                />
            </div>
        </div>
    );
}