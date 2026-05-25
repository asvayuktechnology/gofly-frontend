'use client';

import React, { useEffect, useState } from 'react';
import ErrorLabel from '../ErrorLabel';
import ColumnDiv from '../UI/ColumnDiv';
import { FieldError } from 'react-hook-form';

type Props = {
  name: string;
  label?: string;
  accept?: string;
  error?: FieldError;

  file?: File | null;
  onChange?: (file: File | null) => void;

  className?: string;
  previewClassName?: string;
};

const FileUploadInput = ({
  name,
  label = 'Upload File',
  accept = '.png,.jpg,.jpeg,.pdf,.doc,.docx',
  error,
  file,
  onChange,
  className,
  previewClassName,
}: Props) => {

  const [preview, setPreview] = useState<string | null>(null);

  useEffect(() => {
    if (!file) {
      setPreview(null);
      return;
    }

    // Image Preview
    if (file.type.startsWith('image/')) {
      const objectUrl = URL.createObjectURL(file);
      setPreview(objectUrl);

      return () => URL.revokeObjectURL(objectUrl);
    }

    setPreview(null);
  }, [file]);

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const selectedFile = e.target.files?.[0] || null;
    onChange?.(selectedFile);
  };

  return (
    <ColumnDiv className="w-full">
      {/* Label */}
      <label
        htmlFor={name}
        className="block mb-2 text-[11px] font-medium text-black"
      >
        {label}
      </label>

      {/* Upload Box */}
      <label
        className={`
          border-2 border-dashed rounded-xl
          p-6 flex flex-col items-center justify-center
          text-center cursor-pointer transition-all
          hover:border-black
          ${error ? 'border-red-500' : 'border-gray-300'}
          ${className || ''}
        `}
      >
        <input
          id={name}
          type="file"
          accept={accept}
          className="hidden"
          onChange={handleFileChange}
        />

        {/* Preview */}
        {preview ? (
          <img
            src={preview}
            alt="preview"
            className={`
              w-32 h-32 object-cover rounded-lg mb-4
              ${previewClassName || ''}
            `}
          />
        ) : (
          <>
            <p className="text-sm font-medium text-gray-700">
              Drag & Drop File Here To Upload
            </p>

            <p className="text-xs text-gray-500 mt-1">
              PNG, JPG, PDF, DOCX
            </p>
          </>
        )}

        {/* File Name */}
        {file && (
          <p className="text-sm text-black mt-3 font-medium break-all">
            {file.name}
          </p>
        )}
      </label>

      <ErrorLabel fieldError={error} />
    </ColumnDiv>
  );
};

export default FileUploadInput;