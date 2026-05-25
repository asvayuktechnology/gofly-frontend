'use client';

import React from 'react';
import { FieldError, UseFormRegister } from 'react-hook-form';

import ErrorLabel from '../ErrorLabel';
import ColumnDiv from '../UI/ColumnDiv';

type Props = {
  name: string;
  label: string;
  placeholder?: string;
  rows?: number;
  className?: string;
  labelstyle?: string;

  register?: UseFormRegister<any>;
  validationSchema?: any;
  error?: FieldError;

  defaultValue?: string;

  value?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLTextAreaElement>
  ) => void;

  readOnly?: boolean;
};

const TextAreaInput = ({
  name,
  placeholder,
  register,
  validationSchema,
  error,
  label,
  rows = 4,
  defaultValue,
  className,
  labelstyle,
  value,
  onChange,
  readOnly,
}: Props) => {

  const textareaClass = `
    w-full rounded-[8px]
    border bg-white text-black
    px-4 py-3
    focus:outline-none focus:border-black
    resize-none
    ${error ? 'border-red-500' : 'border-black'}
    ${className || ''}
  `;

  // ================= WITH REGISTER =================
  if (register) {
    return (
      <ColumnDiv className="w-full">
        <label
          htmlFor={name}
          className={`block mb-2 text-[11px] font-medium text-black ${
            labelstyle || ''
          }`}
        >
          {label}
        </label>

        <textarea
          id={name}
          placeholder={placeholder}
          rows={rows}
          defaultValue={defaultValue}
          readOnly={readOnly}
          {...register(name, { ...validationSchema })}
          className={textareaClass}
        />

        <ErrorLabel fieldError={error} />
      </ColumnDiv>
    );
  }

  // ================= WITHOUT REGISTER =================
  return (
    <ColumnDiv className="w-full">
      <label
        htmlFor={name}
        className={`block mb-2 text-[11px] font-medium text-black ${
          labelstyle || ''
        }`}
      >
        {label}
      </label>

      <textarea
        id={name}
        name={name}
        placeholder={placeholder}
        rows={rows}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        className={textareaClass}
      />

      <ErrorLabel fieldError={error} />
    </ColumnDiv>
  );
};

export default TextAreaInput;