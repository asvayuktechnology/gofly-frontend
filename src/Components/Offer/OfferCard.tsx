import Image from "next/image";
import Link from "next/link";
import { Offer, OfferProps } from "@/types/index";

const OfferCard = ({ offer, priority }: OfferProps) => {
  return (
    <Link
      href={offer.link}
      className="block group focus:outline-none"
      aria-label={offer.alt}
    >
      <div className="relative overflow-hidden rounded-2xl shadow-md">
        <Image
          src={offer.image}
          alt={offer.alt}
          width={550}
          height={220}
          priority={priority}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="w-full h-[180px] md:h-[200px] lg:h-[220px] object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
    </Link>
  );
};

export default OfferCard;
