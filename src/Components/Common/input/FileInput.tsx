'use client';
import React, { useState, useEffect, useRef } from 'react';
import { UseFormRegister, FieldError, useWatch } from 'react-hook-form';
import ErrorLabel from '../ErrorLabel';
// import ColumnDiv from '../../ColumnDiv';
import Image from 'next/image';
import ColumnDiv from '../UI/ColumnDiv';

type Props = {
  name?: string;
  label: string;
  type?: string;
  register?: UseFormRegister<any>;
  validationSchema?: any;
  error?: FieldError;
  className?: string;
  accept?: string;
  control?: any;
  resetTrigger?: any;
};


const FileInput = ({
  name = '',
  label,
  type = 'file',
  register,
  validationSchema,
  error,
  className = '',
  accept = 'image/png,image/jpg,image/jpeg',
  control,
  resetTrigger, 
}: Props) => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const fileValue = useWatch({
    control,
    name,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    return () => {
      if (previewUrl) URL.revokeObjectURL(previewUrl);
    };
  }, [previewUrl]);

  // 👇 reset preview on form submission
  useEffect(() => {
    setPreviewUrl(null);
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  }, [resetTrigger]);

  return (
    <ColumnDiv className="relative mb-4">
      <label htmlFor={name} className="block mb-2 text-sm font-medium">
        {label}
      </label>

      <input
        id={name}
        type={type}
        accept={accept}
        {...(register && register(name))}
        onChange={handleChange}
        ref={(e) => {
          if (register && register(name).ref) {
            register(name).ref(e);
          }
          inputRef.current = e;
        }}
        className={`block w-full text-sm text-white bg-blue-500 border border-transparent rounded-md file:bg-blue-600 file:border-0 file:py-2 file:px-4 cursor-pointer ${error ? 'border-red-500' : 'border-[#3d44c1]'
          } ${className}`}
      />

      {previewUrl && (
        <div className="mt-3">
          <Image
            height={50}
            width={50}
            src={previewUrl}
            alt="Preview"
            className="h-32 w-32 object-cover rounded border"
          />
        </div>
      )}

      <ErrorLabel fieldError={error} />
    </ColumnDiv>
  );
};


export default FileInput;