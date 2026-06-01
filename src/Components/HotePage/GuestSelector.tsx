"use client";

import { useMemo, useState } from "react";

interface Room {
  id: number;
  adults: number;
  children: number;
}

export default function GuestRoomDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const [rooms, setRooms] = useState<Room[]>([
    {
      id: 1,
      adults: 1,
      children: 0,
    },
  ]);

  const totalAdults = useMemo(
    () => rooms.reduce((sum, room) => sum + room.adults, 0),
    [rooms]
  );

  const totalChildren = useMemo(
    () => rooms.reduce((sum, room) => sum + room.children, 0),
    [rooms]
  );

  const updateRoom = (
    roomId: number,
    field: "adults" | "children",
    operation: "plus" | "minus"
  ) => {
    setRooms((prev) =>
      prev.map((room) => {
        if (room.id !== roomId) return room;

        const current = room[field];

        return {
          ...room,
          [field]:
            operation === "plus"
              ? current + 1
              : Math.max(field === "adults" ? 1 : 0, current - 1),
        };
      })
    );
  };

  const addRoom = () => {
    setRooms((prev) => [
      ...prev,
      {
        id: Date.now(),
        adults: 1,
        children: 0,
      },
    ]);
  };

  const removeRoom = (roomId: number) => {
    if (rooms.length === 1) return;

    setRooms((prev) => prev.filter((room) => room.id !== roomId));
  };

  return (
    <div className="single-field">
      <svg
        width={18}
        height={18}
        viewBox="0 0 18 18"
      >
        <path d="M9.00003 1.52136C4.02939 1.52136 0 5.55075 0 10.5214C0 12.6873 0.765549 14.6746 2.04035 16.2275C2.23702 14.6528 3.80989 13.3209 6.01543 12.6901C6.82119 13.4409 7.86199 13.8964 8.99997 13.8964C10.1112 13.8964 11.1316 13.4638 11.9292 12.7445C14.1538 13.4304 15.6928 14.8401 15.7434 16.4787C17.1465 14.8914 18 12.8067 18 10.5214C18 5.55075 13.9706 1.52136 9.00003 1.52136Z" />
      </svg>

      <div
        className="custom-select-dropdown"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <h6>
          <span id="adult-qty">{totalAdults}</span> Adults,{" "}
          <span id="child-qty">{totalChildren}</span> Child
        </h6>

        <span>
          <strong>{rooms.length}</strong> Room
        </span>
      </div>

      {isOpen && (
        <div className="custom-select-wrap">
          <div className="title-area">
            <h6>Guest & Room</h6>
            <span>
              Start the journey with someone special.
            </span>
          </div>

          <ul className="room-list">
            {rooms.map((room, index) => (
              <li
                className="single-room"
                key={room.id}
              >
                <div className="room-title">
                  <h6>Room-{index + 1}</h6>

                  {rooms.length > 1 && (
                    <div
                      className="room-delete-btn"
                      onClick={() =>
                        removeRoom(room.id)
                      }
                    >
                      <svg
                        width={15}
                        height={15}
                        viewBox="0 0 15 15"
                      >
                        <path d="M10.3097 15H4.6902..." />
                      </svg>
                    </div>
                  )}
                </div>

                <ul className="guest-count">
                  <li className="single-item">
                    <div className="title">
                      <h6>Adult</h6>
                      <span>16 years+</span>
                    </div>

                    <div className="quantity-counter">
                      <button
                        type="button"
                        className="guest-quantity__minus"
                        onClick={() =>
                          updateRoom(
                            room.id,
                            "adults",
                            "minus"
                          )
                        }
                      >
                        <i className="bi bi-dash" />
                      </button>

                      <input
                        className="quantity__input"
                        value={room.adults}
                        readOnly
                      />

                      <button
                        type="button"
                        className="guest-quantity__plus"
                        onClick={() =>
                          updateRoom(
                            room.id,
                            "adults",
                            "plus"
                          )
                        }
                      >
                        <i className="bi bi-plus" />
                      </button>
                    </div>
                  </li>

                  <li className="single-item">
                    <div className="title">
                      <h6>Children</h6>
                      <span>0-16 years</span>
                    </div>

                    <div className="quantity-counter">
                      <button
                        type="button"
                        className="guest-quantity__minus"
                        onClick={() =>
                          updateRoom(
                            room.id,
                            "children",
                            "minus"
                          )
                        }
                      >
                        <i className="bi bi-dash" />
                      </button>

                      <input
                        className="quantity__input"
                        value={room.children}
                        readOnly
                      />

                      <button
                        type="button"
                        className="guest-quantity__plus"
                        onClick={() =>
                          updateRoom(
                            room.id,
                            "children",
                            "plus"
                          )
                        }
                      >
                        <i className="bi bi-plus" />
                      </button>
                    </div>
                  </li>
                </ul>
              </li>
            ))}
          </ul>

          <button
            type="button"
            className="primary-btn1 two add-btn"
            onClick={addRoom}
          >
            <span>
              Add Another Room
            </span>

            <span>
              Add Another Room
            </span>
          </button>
        </div>
      )}
    </div>
  );
}