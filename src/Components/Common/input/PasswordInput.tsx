'use client';
import React, { useState } from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';
import { usePathname } from 'next/navigation';
import { FaEyeSlash, FaEye } from 'react-icons/fa';
import ColumnDiv from '../UI/ColumnDiv';
import ErrorLabel from '../ErrorLabel';

type Props = {
  name?: string;
  label: string;
  placeholder?: string;
  register?: UseFormRegister<any>;
  validationSchema?: any;
  error?: FieldError;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  authinput?: boolean;
  readOnly?: boolean;
  type?: string;
};

const PasswordInput = (props: Props) => {
  const {
    name = '',
    label,
    register,
    validationSchema,
    error,
    value,
    onChange,
    authinput,
    readOnly,
  } = props;

  const [inputValue, setInputValue] = useState(value || '');
  const [type, setType] = useState<'password' | 'text'>('password');

  const pathname = usePathname();
  const isUserLogin = ['/login', '/forget', '/register'].some(path =>
    pathname.includes(path)
  );

  const hasError = error && error.message;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onChange?.(e);
  };

  const toggleType = () => {
    setType(prev => (prev === 'password' ? 'text' : 'password'));
  };

  // ================= REGISTER CASE =================
  if (register) {
    return (
      <ColumnDiv className="relative mb-4">
        {authinput ? (
          <label
            htmlFor={name}
            className={`absolute left-3 text-[11px] pointer-events-none
              ${inputValue ? 'opacity-0' : 'opacity-100 top-[3px]'}
              ${isUserLogin ? 'text-black' : 'text-slate-200'}
            `}
          >
            {label}
          </label>
        ) : (
          <label
            htmlFor={name}
            className={` ${authinput ? "absolute -top-[5px] left-3 authlabel" : ""}  peer-focus:opacity-0 focus:text-slate-800 transition-opacity duration-200 pt-2 text-[11px]  pointer-events-none text-black`}>{label}</label>)}

        <div className="relative flex items-center">
          <input
            id={name}
            type={type}
            defaultValue={value || ""}
            {...register(name, {
              ...validationSchema,
              onChange: (e) => handleChange(e),
            })}
            readOnly={readOnly}
            // Register case
            className={`peer h-14 w-full rounded-[10px] text-black border p-4
focus:outline-none focus:ring-0 focus:border-black
${hasError ? 'border-red-500' : 'border-black'}
`} />

          <span
            className="absolute right-4 cursor-pointer"
            onClick={toggleType}
          >
            {type === 'password' ? (
              <FaEye className={isUserLogin ? 'text-black' : 'text-black'} />
            ) : (
              <FaEyeSlash className={isUserLogin ? 'text-black' : 'text-black'} />
            )}
          </span>
        </div>

        <ErrorLabel fieldError={error} />
      </ColumnDiv>
    );
  }

  // ================= WITHOUT REGISTER =================
  return (
    <ColumnDiv>
      <div className="relative">
        {authinput ? (
          <label
            htmlFor={name}
            className={`absolute left-3 text-[11px] pointer-events-none
              ${inputValue ? 'opacity-0' : 'opacity-100 top-[3px]'}
              text-black`}
          >
            {label}
          </label>
        ) : (
          <label
            htmlFor={name}
            className="py-1 text-black text-[11px] absolute -top-[0px] left-3 pointer-events-none"
          >
            {label}
          </label>
        )}

        <div className="relative flex items-center">
          <input
            id={name}
            type={type}
            value={inputValue}
            placeholder={props.placeholder}
            // Without-register case
            className={`h-12 w-full rounded-md bg-white p-4 border
focus:outline-none focus:border-black
${hasError ? 'border-red-500' : 'border-black'}`}
            onChange={handleChange}
          />

          <span
            className="absolute right-4 cursor-pointer"
            onClick={toggleType}
          >
            {type === 'password' ? (
              <FaEye className="text-black" />
            ) : (
              <FaEyeSlash className="text-black" />
            )}
          </span>
        </div>
      </div>

      <ErrorLabel fieldError={error} />
    </ColumnDiv>
  );
};

export default PasswordInput;