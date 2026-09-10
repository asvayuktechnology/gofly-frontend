"use client";

import React, { FormEvent, useMemo, useState } from "react";
import {
  CalendarDays,
  ChevronDown,
  MapPin,
  Minus,
  Plus,
  Search,
  Trash2,
  Users,
  X,
} from "lucide-react";
import SiteBtn from "../Common/SiteBtn/SiteBtn";
import { svgIcon } from "../Common/Icons/SvgIcons";

type Destination = {
  id: number;
  city: string;
  country: string;
  code: string;
};

type Room = {
  id: number;
  adults: number;
  children: number;
};

type HotelSearchData = {
  destination: Destination | null;
  checkIn: string;
  checkOut: string;
  rooms: Room[];
};

const DESTINATIONS: Destination[] = [
  {
    id: 1,
    city: "Cox's Bazar",
    country: "Bangladesh",
    code: "BD",
  },
  {
    id: 2,
    city: "Bali Paradise",
    country: "Indonesia",
    code: "ID",
  },
  {
    id: 3,
    city: "Pokhara",
    country: "Nepal",
    code: "NP",
  },
  {
    id: 4,
    city: "Himachal",
    country: "India",
    code: "IN",
  },
  {
    id: 5,
    city: "Sao Paulo",
    country: "Brazil",
    code: "BR",
  },
  {
    id: 6,
    city: "Bangkok",
    country: "Thailand",
    code: "TH",
  },
  {
    id: 7,
    city: "Barcelona",
    country: "Spain",
    code: "ES",
  },
  {
    id: 8,
    city: "Burj Khalifa",
    country: "Dubai",
    code: "AE",
  },
  {
    id: 9,
    city: "New York",
    country: "United States",
    code: "US",
  },
];

const createInitialRoom = (): Room => ({
  id: Date.now(),
  adults: 1,
  children: 0,
});

const HotelSearchBar = () => {
  const [destinationOpen, setDestinationOpen] = useState(false);
  const [guestOpen, setGuestOpen] = useState(false);

  const [destination, setDestination] = useState<Destination | null>(
    DESTINATIONS[0]
  );

  const [destinationSearch, setDestinationSearch] = useState("");

  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");

  const [rooms, setRooms] = useState<Room[]>([createInitialRoom()]);

  const filteredDestinations = useMemo(() => {
    const search = destinationSearch.trim().toLowerCase();

    if (!search) {
      return DESTINATIONS;
    }

    return DESTINATIONS.filter(
      (item) =>
        item.city.toLowerCase().includes(search) ||
        item.country.toLowerCase().includes(search) ||
        item.code.toLowerCase().includes(search)
    );
  }, [destinationSearch]);

  const totalAdults = rooms.reduce((total, room) => total + room.adults, 0);

  const totalChildren = rooms.reduce(
    (total, room) => total + room.children,
    0
  );

  const updateRoom = (
    roomId: number,
    type: "adults" | "children",
    value: number
  ) => {
    setRooms((currentRooms) =>
      currentRooms.map((room) => {
        if (room.id !== roomId) {
          return room;
        }

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
    if (rooms.length === 1) {
      return;
    }

    setRooms((currentRooms) =>
      currentRooms.filter((room) => room.id !== roomId)
    );
  };

  const handleDestinationSelect = (item: Destination) => {
    setDestination(item);
    setDestinationOpen(false);
    setDestinationSearch("");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!destination) {
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

    const searchData: HotelSearchData = {
      destination,
      checkIn,
      checkOut,
      rooms,
    };

    console.log("Hotel Search:", searchData);

    // Replace this with your API call / router navigation.
    // Example:
    // router.push(`/hotels?destination=${destination.city}&checkIn=${checkIn}`);
  };

  const formatDateRange = () => {
    if (!checkIn && !checkOut) {
      return "Select dates";
    }

    if (checkIn && !checkOut) {
      return `${checkIn} - Check-out`;
    }

    return `${checkIn} - ${checkOut}`;
  };

  return (
    <section className="mb-20 w-full relative -top-22">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white p-4 shadow-[0_10px_40px_rgba(0,0,0,0.08)] sm:p-6">
          {/* Heading */}
          <div className="mb-5">
            <h6 className="text-base font-semibold text-gray-900 sm:text-lg">
              Find Your Flexible Accommodation
            </h6>
          </div>

          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 gap-3 lg:grid-cols-[1.5fr_1fr_1fr_1.25fr_auto]"
          >
            {/* =====================================================
                DESTINATION
            ====================================================== */}
            <div className="relative">
              <div
                className={`flex min-h-[64px] cursor-pointer items-center gap-3 rounded-xl border bg-white px-4 transition ${destinationOpen
                  ? "border-gray-900 shadow-sm"
                  : "border-gray-200 hover:border-gray-300"
                  }`}
                onClick={() => {
                  setDestinationOpen((value) => !value);
                  setGuestOpen(false);
                }}
              >
                <MapPin
                  size={20}
                  strokeWidth={1.8}
                  className="shrink-0 text-gray-500"
                />

                <div className="min-w-0 flex-1">
                  {/* <p className="mb-1 text-xs font-medium text-gray-500">
                    Destination
                  </p> */}

                  {destination ? (
                    <div>
                      <h6 className="truncate text-sm font-semibold text-gray-900">
                        {destination.city}
                      </h6>
                      <span className="truncate text-xs text-gray-500">
                        {destination.country}
                      </span>
                    </div>
                  ) : (
                    <p className="text-sm text-gray-500">
                      Where are you going?
                    </p>
                  )}
                </div>

                <ChevronDown
                  size={17}
                  className={`shrink-0 text-gray-400 transition-transform ${destinationOpen ? "rotate-180" : ""
                    }`}
                />
              </div>

              {destinationOpen && (
                <div className="absolute left-0 top-[calc(100%+8px)] z-50 w-full min-w-[290px] overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl">
                  {/* Search */}
                  <div className="border-b border-gray-100 p-3">
                    <div className="flex items-center gap-2 rounded-lg bg-gray-50 px-3">
                      <Search size={16} className="text-gray-400" />

                      <input
                        type="text"
                        value={destinationSearch}
                        onChange={(event) =>
                          setDestinationSearch(event.target.value)
                        }
                        onClick={(event) => event.stopPropagation()}
                        placeholder="Type your destination"
                        className="h-10 w-full bg-transparent text-sm text-gray-900 outline-none placeholder:text-gray-400"
                        autoFocus
                      />

                      {destinationSearch && (
                        <button
                          type="button"
                          onClick={(event) => {
                            event.stopPropagation();
                            setDestinationSearch("");
                          }}
                          className="text-gray-400 hover:text-gray-700"
                        >
                          <X size={15} />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Destination list */}
                  <div className="max-h-[320px] overflow-y-auto p-2">
                    {filteredDestinations.length > 0 ? (
                      filteredDestinations.map((item) => {
                        const isSelected = destination?.id === item.id;

                        return (
                          <button
                            key={item.id}
                            type="button"
                            onClick={() => handleDestinationSelect(item)}
                            className={`flex w-full items-center gap-3 rounded-lg p-3 text-left transition ${isSelected
                              ? "bg-gray-100"
                              : "hover:bg-gray-50"
                              }`}
                          >
                            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-100 text-[11px] font-bold text-gray-700">
                              {item.code}
                            </span>

                            <span className="min-w-0 flex-1">
                              <span className="block truncate text-sm font-semibold text-gray-900">
                                {item.city}
                              </span>
                              <span className="block truncate text-xs text-gray-500">
                                {item.country}
                              </span>
                            </span>

                            {isSelected && (
                              <span className="text-xs font-semibold text-gray-900">
                                ✓
                              </span>
                            )}
                          </button>
                        );
                      })
                    ) : (
                      <div className="px-4 py-8 text-center">
                        <p className="text-sm font-medium text-gray-700">
                          No destinations found
                        </p>
                        <p className="mt-1 text-xs text-gray-400">
                          Try another destination
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* =====================================================
                CHECK-IN
            ====================================================== */}
            <div className="relative">
              <label className="flex min-h-[64px] cursor-pointer items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 transition hover:border-gray-300">
                <CalendarDays
                  size={20}
                  strokeWidth={1.8}
                  className="shrink-0 text-gray-500"
                />

                <div className="min-w-0 flex-1">
                  {/* <p className="mb-1 text-xs font-medium text-gray-500">
                    Check-in
                  </p> */}

                  <input
                    type="date"
                    value={checkIn}
                    onChange={(event) => {
                      setCheckIn(event.target.value);

                      if (
                        checkOut &&
                        event.target.value >= checkOut
                      ) {
                        setCheckOut("");
                      }
                    }}
                    className="w-full cursor-pointer border-0 bg-transparent p-0 text-sm font-semibold text-gray-900 outline-none"
                  />
                </div>
              </label>
            </div>

            {/* =====================================================
                CHECK-OUT
            ====================================================== */}
            <div className="relative">
              <label className="flex min-h-[64px] cursor-pointer items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 transition hover:border-gray-300">
                <CalendarDays
                  size={20}
                  strokeWidth={1.8}
                  className="shrink-0 text-gray-500"
                />

                <div className="min-w-0 flex-1">
                  {/* <p className="mb-1 text-xs font-medium text-gray-500">
                    Check-out
                  </p> */}

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

            {/* =====================================================
                GUESTS & ROOMS
            ====================================================== */}
            <div className="relative">
              <div
                onClick={() => {
                  setGuestOpen((value) => !value);
                  setDestinationOpen(false);
                }}
                className={`flex min-h-[64px] w-full items-center gap-3 rounded-xl border bg-white px-4 text-left transition ${guestOpen
                  ? "border-gray-900 shadow-sm"
                  : "border-gray-200 hover:border-gray-300"
                  }`}
              >
                <Users
                  size={20}
                  strokeWidth={1.8}
                  className="shrink-0 text-gray-500"
                />

                <div className="min-w-0 flex-1">
                  {/* <p className="mb-1 text-xs font-medium text-gray-500">
                    Guests & Rooms
                  </p> */}

                  <h6 className="truncate  font-semibold text-gray-900">
                    {totalAdults} Adults, {totalChildren} Children
                  </h6>

                  <span className="text-xs text-gray-500">
                    {rooms.length}{" "}
                    {rooms.length === 1 ? "Room" : "Rooms"}
                  </span>
                </div>


              </div>

              {guestOpen && (
                <div className="absolute right-0 top-[calc(100%+8px)] z-50 w-full min-w-[320px] max-w-[400px] overflow-hidden rounded-xl border border-gray-200 bg-white shadow-xl">
                  {/* Header */}
                  <div className="border-b border-gray-100 px-4 py-4">
                    <h6 className="text-md font-semibold text-gray-900">
                      Guest & Room
                    </h6>

                    <span className="mt-1 text-sm text-gray-500">
                      Start the journey with someone special.
                    </span>
                  </div>

                  {/* Rooms */}
                  <div className="max-h-[360px] overflow-y-auto p-4">
                    <div className="space-y-5">
                      {rooms.map((room, index) => (
                        <div
                          key={room.id}
                          className="rounded-xl border border-gray-100 bg-gray-50 p-4"
                        >
                          {/* Room title */}
                          <div className="mb-4 flex items-center justify-between">
                            <h6 className="text-sm font-semibold text-gray-900">
                              Room-{index + 1}
                            </h6>

                            {rooms.length > 1 && (
                              <button
                                type="button"
                                onClick={() => removeRoom(room.id)}
                                className="flex h-8 w-8 items-center justify-center rounded-lg text-gray-400 transition hover:bg-red-50 hover:text-red-500"
                                aria-label={`Remove room ${index + 1
                                  }`}
                              >
                                <Trash2 size={15} />
                              </button>
                            )}
                          </div>

                          {/* Adults */}
                          <GuestCounter
                            title="Adult"
                            subtitle="16 years+"
                            value={room.adults}
                            min={1}
                            onDecrease={() =>
                              updateRoom(
                                room.id,
                                "adults",
                                room.adults - 1
                              )
                            }
                            onIncrease={() =>
                              updateRoom(
                                room.id,
                                "adults",
                                room.adults + 1
                              )
                            }
                          />

                          {/* Children */}
                          <GuestCounter
                            title="Children"
                            subtitle="0-16 years"
                            value={room.children}
                            min={0}
                            onDecrease={() =>
                              updateRoom(
                                room.id,
                                "children",
                                room.children - 1
                              )
                            }
                            onIncrease={() =>
                              updateRoom(
                                room.id,
                                "children",
                                room.children + 1
                              )
                            }
                          />
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Add room */}
                  <div className="border-t border-gray-100 p-4">
                    <button
                      type="button"
                      onClick={addRoom}
                      className="flex w-full items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white py-3 text-sm font-semibold text-gray-900 transition hover:border-gray-900 hover:bg-gray-50"
                    >
                      <Plus size={16} />
                      Add Another Room
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* =====================================================
                SEARCH BUTTON
            ====================================================== */}

            <SiteBtn
              type="submit"
              className="primary-btn1 cursor-pointer"
              text="SEARCH"
              svgIcon={
                svgIcon.searchIcon
              }
              iconPosition="start"
            />
          </form>

          {/* Small summary */}
          {(checkIn || checkOut || destination) && (
            <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-gray-500">
              {destination && (
                <span>
                  <strong className="font-semibold text-gray-700">
                    {destination.city}
                  </strong>
                </span>
              )}

              {(checkIn || checkOut) && (
                <span>{formatDateRange()}</span>
              )}

              <span>
                {totalAdults} Adults · {totalChildren} Children ·{" "}
                {rooms.length} {rooms.length === 1 ? "Room" : "Rooms"}
              </span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

/* ================================================================
   GUEST COUNTER
================================================================ */

type GuestCounterProps = {
  title: string;
  subtitle: string;
  value: number;
  min: number;
  onDecrease: () => void;
  onIncrease: () => void;
};

const GuestCounter = ({
  title,
  subtitle,
  value,
  min,
  onDecrease,
  onIncrease,
}: GuestCounterProps) => {
  return (
    <div className="flex items-center justify-between gap-4 py-2">
      <div>
        <h6 className="text-md font-semibold text-gray-900">
          {title}
        </h6>

        <span className="mt-0.5 text-sm text-gray-500">{subtitle}</span>
      </div>

      <div className="flex items-center gap-3">
        <button
          type="button"
          disabled={value <= min}
          onClick={onDecrease}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 transition hover:border-gray-900 disabled:cursor-not-allowed disabled:opacity-40"
          aria-label={`Decrease ${title}`}
        >
          <Minus size={14} />
        </button>

        <span className="w-5 text-center text-sm font-semibold text-gray-900">
          {value}
        </span>

        <button
          type="button"
          onClick={onIncrease}
          className="flex h-8 w-8 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-700 transition hover:border-gray-900"
          aria-label={`Increase ${title}`}
        >
          <Plus size={14} />
        </button>
      </div>
    </div>
  );
};

export default HotelSearchBar;