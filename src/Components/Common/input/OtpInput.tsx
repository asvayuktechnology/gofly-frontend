// components/Common/input/OtpInput.tsx
"use client";

import React from "react";

type Props = {
  value: string;
  onChange: (value: string) => void;
  onKeyDown?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  inputRef?: (el: HTMLInputElement | null) => void;
};

export default function OtpInput({
  value,
  onChange,
  onKeyDown,
  inputRef,
}: Props) {
  return (
    <input
      ref={inputRef}
      type="text"
      inputMode="numeric"
      maxLength={1}
      value={value}
      onChange={(e) => {
        const val = e.target.value;

        if (!/^\d*$/.test(val)) return;

        onChange(val.slice(-1));
      }}
      onKeyDown={onKeyDown}
      className="
        peer
        h-14
        w-14
        rounded-[8px]
        border
        border-black
        bg-white
        text-center
        text-[20px]
        font-semibold
        text-black
        focus:outline-0
        focus:border-black
        active:border-black
      "
    />
  );
}