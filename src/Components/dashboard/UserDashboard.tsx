
"use client";

import {
  Bell,
  CalendarDays,
  CreditCard,
  MapPin,
  Plane,
  Settings,
  Ticket,
  User,
} from "lucide-react";

const bookingCards = [
  {
    title: "Total Bookings",
    value: "128",
    icon: Ticket,
  },
  {
    title: "Upcoming Trips",
    value: "08",
    icon: Plane,
  },
  {
    title: "Saved Places",
    value: "24",
    icon: MapPin,
  },
  {
    title: "Wallet Balance",
    value: "$2,450",
    icon: CreditCard,
  },
];

const trips = [
  {
    place: "Bali, Indonesia",
    date: "12 May 2026",
    status: "Confirmed",
    image:
      "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    place: "Paris, France",
    date: "22 Jun 2026",
    status: "Pending",
    image:
      "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-[#f7f8fc]">
      {/* Top Navbar */}
      <header className="w-full h-[75px] bg-white border-b border-gray-200 px-6 lg:px-10 flex items-center justify-between sticky top-0 z-50">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center text-white font-bold text-lg">
            G
          </div>

          <div>
            <h1 className="text-xl font-bold text-gray-900">
              GoFly Dashboard
            </h1>
            <p className="text-xs text-gray-500">
              Travel Management Panel
            </p>
          </div>
        </div>

        {/* Right */}
        <div className="flex items-center gap-4">
          <button className="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition">
            <Bell size={20} />
          </button>

          <button className="w-11 h-11 rounded-full bg-gray-100 flex items-center justify-center hover:bg-gray-200 transition">
            <Settings size={20} />
          </button>

          <img
            src="https://i.pravatar.cc/150"
            alt="user"
            className="w-11 h-11 rounded-full object-cover border-2 border-white shadow"
          />
        </div>
      </header>

      <div className="flex">
        {/* Sidebar */}
        <aside className="w-[260px] bg-white border-r border-gray-200 min-h-[calc(100vh-75px)] hidden lg:block p-6">
          <div className="space-y-2">
            <SidebarItem label="Dashboard" active />
            <SidebarItem label="My Trips" />
            <SidebarItem label="Bookings" />
            <SidebarItem label="Wishlist" />
            <SidebarItem label="Payments" />
            <SidebarItem label="Profile" />
          </div>

          {/* Promo Card */}
          <div className="mt-10 bg-blue-600 rounded-3xl p-5 text-white">
            <h3 className="text-lg font-bold leading-7">
              Explore New Destinations ✈️
            </h3>

            <p className="text-sm text-blue-100 mt-2">
              Get special offers and discounts on your next trip.
            </p>

            <button className="mt-5 bg-white text-blue-600 px-4 py-2 rounded-xl text-sm font-semibold hover:bg-gray-100 transition">
              Discover Now
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-6 lg:p-10">
          {/* Hero */}
          <div
            className="relative overflow-hidden rounded-[30px] h-[280px] bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1600&auto=format&fit=crop')",
            }}
          >
            <div className="absolute inset-0 bg-black/40" />

            <div className="relative z-10 h-full flex flex-col justify-center px-10">
              <p className="text-blue-200 text-sm mb-3">
                Welcome Back 👋
              </p>

              <h2 className="text-4xl lg:text-5xl font-bold text-white max-w-2xl leading-tight">
                Your Next Adventure Starts Here
              </h2>

              <p className="text-gray-200 mt-4 max-w-xl">
                Manage bookings, explore destinations, and plan
                your perfect journey with GoFly.
              </p>

              <button className="mt-7 w-fit bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition">
                Explore Trips
              </button>
            </div>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-8">
            {bookingCards.map((card, index) => {
              const Icon = card.icon;

              return (
                <div
                  key={index}
                  className="bg-white rounded-3xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-gray-500 text-sm">
                        {card.title}
                      </p>

                      <h3 className="text-3xl font-bold text-gray-900 mt-2">
                        {card.value}
                      </h3>
                    </div>

                    <div className="w-14 h-14 rounded-2xl bg-blue-100 flex items-center justify-center">
                      <Icon className="text-blue-600" size={26} />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Upcoming Trips */}
          <div className="mt-10">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  Upcoming Trips
                </h3>

                <p className="text-gray-500 text-sm mt-1">
                  Your latest booked destinations
                </p>
              </div>

              <button className="text-blue-600 font-medium">
                View All
              </button>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {trips.map((trip, index) => (
                <div
                  key={index}
                  className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm"
                >
                  <div className="h-52 overflow-hidden">
                    <img
                      src={trip.image}
                      alt={trip.place}
                      className="w-full h-full object-cover hover:scale-105 transition duration-500"
                    />
                  </div>

                  <div className="p-6">
                    <div className="flex items-center justify-between">
                      <h4 className="text-xl font-bold text-gray-900">
                        {trip.place}
                      </h4>

                      <span
                        className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          trip.status === "Confirmed"
                            ? "bg-green-100 text-green-600"
                            : "bg-yellow-100 text-yellow-700"
                        }`}
                      >
                        {trip.status}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-gray-500 mt-4">
                      <CalendarDays size={18} />
                      <span>{trip.date}</span>
                    </div>

                    <button className="mt-6 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl text-sm font-medium transition">
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Profile Section */}
          <div className="mt-10 bg-white rounded-3xl p-6 border border-gray-100 shadow-sm flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <img
                src="https://i.pravatar.cc/150"
                alt="profile"
                className="w-20 h-20 rounded-full object-cover"
              />

              <div>
                <h3 className="text-2xl font-bold text-gray-900">
                  GO-FLY
                </h3>

                <p className="text-gray-500 mt-1">
                  Premium Traveler Member
                </p>

                <div className="flex items-center gap-2 mt-3 text-blue-600">
                  <User size={16} />
                  <span className="text-sm font-medium">
                    Account Verified
                  </span>
                </div>
              </div>
            </div>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-medium transition">
              Edit Profile
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

function SidebarItem({
  label,
  active,
}: {
  label: string;
  active?: boolean;
}) {
  return (
    <button
      className={`w-full flex items-center px-5 py-3 rounded-2xl font-medium transition ${
        active
          ? "bg-blue-600 text-white"
          : "text-gray-600 hover:bg-gray-100"
      }`}
    >
      {label}
    </button>
  );
}