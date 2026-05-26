'use client';
import React from 'react'
// import ColumnDiv from '../../ColumnDiv';
import ErrorLabel from '../ErrorLabel';
import { useState } from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';
import { usePathname } from 'next/navigation';
import ColumnDiv from '../UI/ColumnDiv';

type Props = {
  name?: string;
  label: string;
  type?: string;
  placeholder?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  register?: UseFormRegister<any>;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  validationSchema?: any;
  error?: FieldError;
  value?: string;
  className?: string// Add className prop
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
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
    authinput,
    readOnly,

  } = props;
  const [inputValue, setInputValue] = useState(value || "");

  // Handle value changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    onChange?.(e);
  };

  const hasError = error && error.message;

  const pathname = usePathname();
  const isUserLogin = ['/login', '/forget', '/register'].some(path => pathname.includes(path));

  if (register) {
    return (
      <ColumnDiv className='relative mb-4'>
        {authinput ? (
          <label
            htmlFor={name}
            className={`absolute left-3 authlabel text-[11px] text-black  pointer-events-none 
              ${inputValue ? 'opacity-0' : 'opacity-100 absolute top-[3px] left-3 authlabel'} 
              ${isUserLogin ? 'text-black' : ''}`}
          >
            {label}
          </label>
        ) : (<label htmlFor={name}

          className={` ${authinput ? "absolute -top-[5px] left-3 authlabel" : ""}  peer-focus:opacity-0 focus:text-slate-800 transition-opacity duration-200 pt-2 text-[11px]  pointer-events-none text-black`}>{label}</label>)}
        <input
          id={name}
          type={type}
          defaultValue={value || ""}
          {...register(name, {
            ...validationSchema,
            onChange: (e) => { handleChange(e); },
          })}
          readOnly={readOnly}
          // placeholder={placeholder}
          className={`peer h-14 w-full rounded-[8px] text-black bg-white border p-4 
focus:outline-0 focus:border-black active:border-black
${hasError ? 'border-red-500' : 'border-black'}`}
        />

        <ErrorLabel fieldError={error} />
      </ColumnDiv>
    );
  } else {
    return (
      <ColumnDiv>
        <div className='relative'>
          {authinput ? (
            <label
              htmlFor={name}
              className={`absolute left-3 text-[11px] text-black pointer-events-none
            ${inputValue ? 'opacity-0' : 'opacity-100 top-[3px]'}`}
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

          <input
            id={name}
            type={type}
            value={inputValue}
            placeholder={placeholder}
            className="h-12 bg-white text-black border border-black 
focus:outline-none focus:border-black 
rounded-md w-full p-4 pl-2"
            onChange={(e) => {
              setInputValue(e.target.value);
              onChange?.(e);
            }}
          />
        </div>

        <ErrorLabel fieldError={error} />
      </ColumnDiv>
    );
  }
};

export default TextInput;
