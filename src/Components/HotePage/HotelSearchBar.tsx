"use client";

import React, { FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { CalendarDays, ChevronDown, MapPin, Minus, Plus, Search, Trash2, Users, X } from "lucide-react";
import SiteBtn from "../Common/SiteBtn/SiteBtn";
import { svgIcon } from "../Common/Icons/SvgIcons";
import { useDestinations } from "@/services/destinationService";
import { useCheckHotelAvailability } from "@/services/hotelService";
import type { DestinationItem } from "@/types/destinationType";

type Room = {
  id: number;
  adults: number;
  children: number;
};

const createInitialRoom = (): Room => ({
  id: Date.now(),
  adults: 1,
  children: 0,
});

const HotelSearchBar = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const { data: destinationRes, isLoading: isLoadingDestinations } = useDestinations({ limit: 100 });
  const destinations: DestinationItem[] = destinationRes?.data || [];

  const { mutateAsync: checkAvailability, isPending: isChecking } = useCheckHotelAvailability();

  const [destinationOpen, setDestinationOpen] = useState(false);
  const [guestOpen, setGuestOpen] = useState(false);

  // refs for outside-click detection
  const destinationRef = useRef<HTMLDivElement>(null);
  const guestRef = useRef<HTMLDivElement>(null);

  // hydrate from URL
  const initialDestinationId = searchParams.get("destination") || "";
  const initialCheckIn = searchParams.get("checkIn") || "";
  const initialCheckOut = searchParams.get("checkOut") || "";
  const initialRoomsParam = searchParams.get("rooms");
  const initialAdultsParam = searchParams.get("adults");
  const initialChildrenParam = searchParams.get("children");

  const [selectedDestination, setSelectedDestination] = useState<DestinationItem | null>(null);
  const [destinationSearch, setDestinationSearch] = useState("");

  const [checkIn, setCheckIn] = useState(initialCheckIn);
  const [checkOut, setCheckOut] = useState(initialCheckOut);

  // derive initial rooms from URL if present
  const getInitialRooms = (): Room[] => {
    const roomsCount = initialRoomsParam ? Number(initialRoomsParam) : 1;
    const adults = initialAdultsParam ? Number(initialAdultsParam) : 1;
    const children = initialChildrenParam ? Number(initialChildrenParam) : 0;
    const rooms: Room[] = [];
    for (let i = 0; i < roomsCount; i++) {
      rooms.push({
        id: Date.now() + i + Math.random(),
        adults: i === 0 ? adults - (roomsCount - 1) : 1,
        children: i === 0 ? children : 0,
      });
    }
    rooms.forEach((r) => {
      if (r.adults < 1) r.adults = 1;
      if (r.children < 0) r.children = 0;
    });
    return rooms.length ? rooms : [createInitialRoom()];
  };

  const [rooms, setRooms] = useState<Room[]>(() => getInitialRooms());

  // sync selectedDestination when destinations load or URL changes
  useEffect(() => {
    if (initialDestinationId && destinations.length) {
      const found = destinations.find((d) => d._id === initialDestinationId);
      if (found) setSelectedDestination(found);
    }
  }, [initialDestinationId, destinations]);

  useEffect(() => {
    setCheckIn(initialCheckIn);
  }, [initialCheckIn]);
  useEffect(() => {
    setCheckOut(initialCheckOut);
  }, [initialCheckOut]);

  useEffect(() => {
    if (initialDestinationId) {
      const roomsCount = initialRoomsParam ? Number(initialRoomsParam) : 1;
      const adults = initialAdultsParam ? Number(initialAdultsParam) : 1;
      const children = initialChildrenParam ? Number(initialChildrenParam) : 0;
      const newRooms: Room[] = [];
      for (let i = 0; i < roomsCount; i++) {
        newRooms.push({
          id: Date.now() + i + Math.random(),
          adults: i === 0 ? adults - (roomsCount - 1) : 1,
          children: i === 0 ? children : 0,
        });
      }
      newRooms.forEach((r) => {
        if (r.adults < 1) r.adults = 1;
        if (r.children < 0) r.children = 0;
      });
      setRooms(newRooms.length ? newRooms : [createInitialRoom()]);
    }
  }, [initialRoomsParam, initialAdultsParam, initialChildrenParam, initialDestinationId]);

  // ---- FIX: close dropdowns on outside click ----
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (destinationRef.current && !destinationRef.current.contains(target)) {
        setDestinationOpen(false);
      }
      if (guestRef.current && !guestRef.current.contains(target)) {
        setGuestOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // close on Escape too, nice touch
  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setDestinationOpen(false);
        setGuestOpen(false);
      }
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, []);

  const filteredDestinations = useMemo(() => {
    const search = destinationSearch.trim().toLowerCase();
    if (!search) return destinations;
    return destinations.filter(
      (item) =>
        item.name.toLowerCase().includes(search) ||
        item.country.toLowerCase().includes(search)
    );
  }, [destinationSearch, destinations]);

  const totalAdults = rooms.reduce((total, room) => total + room.adults, 0);
  const totalChildren = rooms.reduce((total, room) => total + room.children, 0);

  const updateRoom = (roomId: number, type: "adults" | "children", value: number) => {
    setRooms((currentRooms) =>
      currentRooms.map((room) => {
        if (room.id !== roomId) return room;
        const minValue = type === "adults" ? 1 : 0;
        return {
          ...room,
          [type]: Math.max(minValue, value),
        };
      })
    );
  };

  const addRoom = () => {
    setRooms((currentRooms) => [
      ...currentRooms,
      {
        id: Date.now() + Math.random(),
        adults: 1,
        children: 0,
      },
    ]);
  };

  const removeRoom = (roomId: number) => {
    if (rooms.length === 1) return;
    setRooms((currentRooms) => currentRooms.filter((room) => room.id !== roomId));
  };

  const handleDestinationSelect = (item: DestinationItem) => {
    setSelectedDestination(item);
    setDestinationOpen(false);
    setDestinationSearch("");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!selectedDestination) {
      alert("Please select a destination.");
      return;
    }
    if (!checkIn || !checkOut) {
      alert("Please select check-in and check-out dates.");
      return;
    }
    if (checkOut <= checkIn) {
      alert("Check-out date must be after check-in date.");
      return;
    }

    const payload = {
      destinationId: selectedDestination._id,
      checkIn,
      checkOut,
      adults: totalAdults,
      children: totalChildren,
      rooms: rooms.length,
    };

    try {
      const result = await checkAvailability(payload);
      console.log("Availability:", result);
    } catch (err: any) {
      console.error("Availability check failed", err?.response?.data || err);
    }

    const params = new URLSearchParams();
    params.set("destination", selectedDestination._id);
    params.set("checkIn", checkIn);
    params.set("checkOut", checkOut);
    params.set("rooms", String(rooms.length));
    params.set("adults", String(totalAdults));
    params.set("children", String(totalChildren));
    router.push(`/hotel?${params.toString()}`);
  };

  const formatDateRange = () => {
    if (!checkIn && !checkOut) return "Select dates";
    if (checkIn && !checkOut) return `${checkIn} - Check-out`;
    return `${checkIn} - ${checkOut}`;
  };

  return (
    <section className="mb-20 w-full relative -top-22">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white p-4 shadow-[0_10px_40px_rgba(0,0,0,0.08)] sm:p-6">
          <div className="mb-5">
            <h6 className="text-base font-semibold text-gray-900 sm:text-lg">
              {selectedDestination ? `Find Hotels in ${selectedDestination.name}` : "Find Your Flexible Accommodation"}
            </h6>
            {selectedDestination && (
              <p className="text-xs text-gray-500 mt-1">
                {selectedDestination.country} • Destination: <span className="font-semibold text-gray-700">{selectedDestination.name}</span>
              </p>
            )}
          </div>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-3 lg:grid-cols-[1.5fr_1fr_1fr_1.25fr_auto]">
            {/* DESTINATION */}
            <div className="relative" ref={destinationRef}>
              <div
                className={`flex min-h-[64px] cursor-pointer items-center gap-3 rounded-xl border bg-white px-4 transition-all duration-200 ${destinationOpen ? "border-gray-900 shadow-sm" : "border-gray-200 hover:border-gray-300"}`}
                onClick={() => {
                  setDestinationOpen((value) => !value);
                  setGuestOpen(false);
                }}
              >
                <MapPin size={20} strokeWidth={1.8} className="shrink-0 text-gray-500" />
                <div className="min-w-0 flex-1">
                  {selectedDestination ? (
                    <div>
                      <h6 className="truncate text-sm font-semibold text-gray-900">{selectedDestination.name}</h6>
                      <span className="truncate text-xs text-gray-500">{selectedDestination.country}</span>
                    </div>
                  ) : (
                    <p className="text-sm text-gray-500">Where are you going?</p>
                  )}
                </div>
                <ChevronDown size={17} className={`shrink-0 text-gray-400 transition-transform duration-200 ${destinationOpen ? "rotate-180" : ""}`} />
              </div>

              <div
                className={`absolute left-0 top-[calc(100%+8px)] z-50 w-full min-w-[290px] origin-top overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl transition-all duration-200 ease-out ${
                  destinationOpen
                    ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
                    : "pointer-events-none -translate-y-1 scale-95 opacity-0"
                }`}
              >
                <div className="border-b border-gray-100 p-3">
                  <div className="flex items-center gap-2 rounded-lg bg-gray-50 px-3">
                    <Search size={16} className="text-gray-400" />
                    <input
                      type="text"
                      value={destinationSearch}
                      onChange={(event) => setDestinationSearch(event.target.value)}
                      onClick={(event) => event.stopPropagation()}
                      placeholder="Type your destination"
                      className="h-10 w-full bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400"
                    />
                    {destinationSearch && (
                      <button type="button" onClick={(event) => { event.stopPropagation(); setDestinationSearch(""); }} className="text-gray-400 hover:text-gray-700">
                        <X size={15} />
                      </button>
                    )}
                  </div>
                </div>

                <div className="max-h-[320px] overflow-y-auto p-2">
                  {isLoadingDestinations ? (
                    <div className="px-4 py-8 text-center text-sm text-gray-400">Loading destinations...</div>
                  ) : filteredDestinations.length > 0 ? (
                    filteredDestinations.map((item) => {
                      const isSelected = selectedDestination?._id === item._id;
                      return (
                        <button
                          key={item._id}
                          type="button"
                          onClick={() => handleDestinationSelect(item)}
                          className={`flex w-full items-center gap-3 rounded-lg p-3 text-left transition-colors duration-150 ${isSelected ? "bg-gray-100" : "hover:bg-gray-50"}`}
                        >
                          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-100 text-[11px] font-bold text-gray-700">{item.country?.slice(0, 2).toUpperCase()}</span>
                          <span className="min-w-0 flex-1">
                            <span className="block truncate text-sm font-semibold text-gray-900">{item.name}</span>
                            <span className="block truncate text-xs text-gray-500">{item.country}</span>
                          </span>
                          {isSelected && <span className="text-xs font-semibold text-gray-900">✓</span>}
                        </button>
                      );
                    })
                  ) : (
                    <div className="px-4 py-8 text-center">
                      <p className="text-sm font-medium text-gray-700">No destinations found</p>
                      <p className="mt-1 text-xs text-gray-400">Try another destination</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* CHECK-IN */}
            <div className="relative">
              <label className="flex min-h-[64px] cursor-pointer items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 transition-all duration-200 hover:border-gray-300">
                <CalendarDays size={20} strokeWidth={1.8} className="shrink-0 text-gray-500" />
                <div className="min-w-0 flex-1">
                  <span className="block text-[11px] font-semibold uppercase tracking-wide text-gray-400">Check-In</span>
                  <input
                    type="date"
                    value={checkIn}
                    onChange={(event) => {
                      setCheckIn(event.target.value);
                      if (checkOut && event.target.value >= checkOut) setCheckOut("");
                    }}
                    className="w-full cursor-pointer border-0 bg-transparent p-0 text-sm font-semibold text-gray-900 outline-none"
                  />
                </div>
              </label>
            </div>

            {/* CHECK-OUT */}
            <div className="relative">
              <label className="flex min-h-[64px] cursor-pointer items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 transition-all duration-200 hover:border-gray-300">
                <CalendarDays size={20} strokeWidth={1.8} className="shrink-0 text-gray-500" />
                <div className="min-w-0 flex-1">
                  <span className="block text-[11px] font-semibold uppercase tracking-wide text-gray-400">Check-Out</span>
                  <input
                    type="date"
                    value={checkOut}
                    min={checkIn || undefined}
                    onChange={(event) => setCheckOut(event.target.value)}
                    className="w-full cursor-pointer border-0 bg-transparent p-0 text-sm font-semibold text-gray-900 outline-none"
                  />
                </div>
              </label>
            </div>

            {/* GUESTS & ROOMS */}
            <div className="relative" ref={guestRef}>
              <div
                onClick={() => {
                  setGuestOpen((value) => !value);
                  setDestinationOpen(false);
                }}
                className={`flex min-h-[64px] w-full cursor-pointer items-center gap-3 rounded-xl border bg-white px-4 text-left transition-all duration-200 ${guestOpen ? "border-gray-900 shadow-sm" : "border-gray-200 hover:border-gray-300"}`}
              >
                <Users size={20} strokeWidth={1.8} className="shrink-0 text-gray-500" />
                <div className="min-w-0 flex-1">
                  <h6 className="truncate font-semibold text-gray-900">{totalAdults} Adults, {totalChildren} Children</h6>
                  <span className="text-xs text-gray-500">{rooms.length} {rooms.length === 1 ? "Room" : "Rooms"}</span>
                </div>
                <ChevronDown size={17} className={`shrink-0 text-gray-400 transition-transform duration-200 ${guestOpen ? "rotate-180" : ""}`} />
              </div>

              <div
                className={`absolute right-0 top-[calc(100%+8px)] z-50 w-full min-w-[320px] max-w-[400px] origin-top overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl transition-all duration-200 ease-out ${
                  guestOpen
                    ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
                    : "pointer-events-none -translate-y-1 scale-95 opacity-0"
                }`}
              >
                <div className="border-b border-gray-100 px-4 py-4">
                  <h6 className="text-md font-semibold text-gray-900">Guest & Room</h6>
                  <span className="mt-1 text-sm text-gray-500">Start the journey with someone special.</span>
                </div>
                <div className="max-h-[360px] overflow-y-auto p-4">
                  <div className="space-y-5">
                    {rooms.map((room, index) => (
                      <div key={room.id} className="rounded-xl border border-gray-100 bg-gray-50 p-4">
                        <div className="mb-4 flex items-center justify-between">
                          <h6 className="text-sm font-semibold text-gray-900">Room-{index + 1}</h6>
                          {rooms.length > 1 && (
                            <button type="button" onClick={() => removeRoom(room.id)} className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 transition-colors duration-150 hover:bg-red-50 hover:text-red-500" aria-label={`Remove room ${index + 1}`}>
                              <Trash2 size={15} />
                            </button>
                          )}
                        </div>
                        <GuestCounter title="Adult" subtitle="16 years+" value={room.adults} min={1} onDecrease={() => updateRoom(room.id, "adults", room.adults - 1)} onIncrease={() => updateRoom(room.id, "adults", room.adults + 1)} />
                        <GuestCounter title="Children" subtitle="0-16 years" value={room.children} min={0} onDecrease={() => updateRoom(room.id, "children", room.children - 1)} onIncrease={() => updateRoom(room.id, "children", room.children + 1)} />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="border-t border-gray-100 p-4">
                  <button type="button" onClick={addRoom} className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white py-3 text-sm font-semibold text-gray-900 transition-colors duration-150 hover:border-gray-900 hover:bg-gray-50">
                    <Plus size={16} /> Add Another Room
                  </button>
                </div>
              </div>
            </div>

            <SiteBtn type="submit" className="primary-btn1 cursor-pointer" text={isChecking ? "SEARCHING..." : "SEARCH"} svgIcon={svgIcon.searchIcon} iconPosition="start" />
          </form>

          {(checkIn || checkOut || selectedDestination) && (
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-500">
              {selectedDestination && (
                <span>
                  <strong className="font-semibold text-gray-700">{selectedDestination.name}</strong> • {selectedDestination.country}
                </span>
              )}
              {(checkIn || checkOut) && <span>{formatDateRange()}</span>}
              <span>
                {totalAdults} Adults · {totalChildren} Children · {rooms.length} {rooms.length === 1 ? "Room" : "Rooms"}
              </span>
              {checkIn && checkOut && <span>{Math.ceil((new Date(checkOut).getTime() - new Date(checkIn).getTime()) / (1000 * 60 * 60 * 24))} Nights</span>}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

type GuestCounterProps = {
  title: string;
  subtitle: string;
  value: number;
  min: number;
  onDecrease: () => void;
  onIncrease: () => void;
};

const GuestCounter = ({ title, subtitle, value, min, onDecrease, onIncrease }: GuestCounterProps) => {
  return (
    <div className="flex items-center justify-between gap-4 py-2">
      <div>
        <h6 className="text-md font-semibold text-gray-900">{title}</h6>
        <span className="mt-0.5 text-sm text-gray-500">{subtitle}</span>
      </div>
      <div className="flex items-center gap-3">
        <button type="button" disabled={value <= min} onClick={onDecrease} className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 transition-colors duration-150 hover:border-gray-900 disabled:cursor-not-allowed disabled:opacity-40" aria-label={`Decrease ${title}`}>
          <Minus size={14} />
        </button>
        <span className="w-5 text-center text-sm font-semibold text-gray-900">{value}</span>
        <button type="button" onClick={onIncrease} className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 transition-colors duration-150 hover:border-gray-900" aria-label={`Increase ${title}`}>
          <Plus size={14} />
        </button>
      </div>
    </div>
  );
};

export default HotelSearchBar;