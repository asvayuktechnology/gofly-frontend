'use client';

import React, { useState } from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';
import { usePathname } from 'next/navigation';

import ErrorLabel from '../ErrorLabel';
import ColumnDiv from '../UI/ColumnDiv';

type Props = {
  name?: string;
  label: string;
  type?: string;
  placeholder?: string;

  register?: UseFormRegister<any>;
  validationSchema?: any;

  error?: FieldError;
  value?: string;

  className?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;

  authinput?: boolean;
  readOnly?: boolean;
};

const TextInput = (props: Props) => {
  const {
    type = 'text',
    name = '',
    placeholder,
    label,
    register,
    validationSchema,
    error,
    value,
    onChange,
    readOnly,
    className = '',
  } = props;

  const [inputValue, setInputValue] = useState(value || '');

  const pathname = usePathname();
  const isUserLogin = ['/login', '/forget', '/register'].some((path) =>
    pathname.includes(path)
  );

  const hasError = error && error.message;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onChange?.(e);
  };

  const inputClass =
    `w-full rounded-md border p-4 text-black bg-white 
    focus:outline-none focus:border-black 
    ${hasError ? 'border-red-500' : 'border-black'} ${className}`;

  // =========================
  // RHF VERSION
  // =========================
  if (register) {
    return (
      <ColumnDiv className="mb-4">
        <label className="block mb-1 text-[12px] text-black">
          {label}
        </label>

        <input
          id={name}
          type={type}
          defaultValue={value || ''}
          readOnly={readOnly}
          placeholder={placeholder}
          className={`${inputClass} h-14`}
          {...register(name, {
            ...validationSchema,
            onChange: (e) => handleChange(e),
          })}
        />

        <ErrorLabel fieldError={error} />
      </ColumnDiv>
    );
  }

  // =========================
  // NORMAL INPUT VERSION
  // =========================
  return (
    <ColumnDiv className="mb-4">
      <label className="block mb-1 text-[12px] text-black">
        {label}
      </label>

      <input
        id={name}
        type={type}
        value={inputValue}
        placeholder={placeholder}
        readOnly={readOnly}
        className={`${inputClass} h-12`}
        onChange={(e) => handleChange(e)}
      />

      <ErrorLabel fieldError={error} />
    </ColumnDiv>
  );
};

export default TextInput;