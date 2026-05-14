// components/ErrorLabel.tsx
import { FieldError } from 'react-hook-form';

type Props = {
  fieldError?: FieldError;
};

const ErrorLabel = ({ fieldError }: Props) => {
  if (!fieldError?.message) return null;

  return (
    <p className="text-red-500 text-[11px] mt-1">
      {fieldError.message}
    </p>
  );
};

export default ErrorLabel;