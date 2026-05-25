import SpinnerLoader from "../Spinner";
import { FaLock } from "react-icons/fa";
type Props = {
  disableStyle?: boolean;
  text: string;
  type?: "button" | "reset" | "submit";
  outline?: boolean;
  className?: string;
  children?: React.ReactNode;
  wide?: boolean;
  disabled?: boolean;
  btnStyle?:
  | "btn-info"
  | "btn-success"
  | "btn-warning"
  | "btn-error"
  | "btn-normal";
  onClick?: React.MouseEventHandler | undefined;
  isLoading?: boolean
  active?: boolean
};
const Button = (props: Props) => {
  const {
    text,
    type = "button",
    className,
    children,
    outline,
    btnStyle,
    disabled,
    onClick,
    isLoading,
    active, disableStyle
  } = props;
  // const defaultBg = "linear-gradient(50deg, rgb(61, 68, 193), rgb(68, 68, 252) 48%, rgb(61, 68, 193))";
  const defaultBg = "#000000";
  // const bgColr = active ? defaultBg : active !== undefined ? "linear-gradient(50deg, #ffffff, #f5f5f5 48%, #ffffff)" : defaultBg;
  // const textColor = active ? "white" : active !== undefined ? 'black' : 'white';
  const bgColr = active
  ? defaultBg
  : active !== undefined
  ? "#f5f5f5"
  : defaultBg;

const textColor = active
  ? "white"
  : active !== undefined
  ? "black"
  : "white";
  const customStyle = disableStyle
    ? undefined
    : {
      background: bgColr,
      color: textColor,
      cursor: "pointer"
    };
  return (
    <button
  type={type}
  onClick={onClick}
  disabled={isLoading ?? disabled}
  className={`min-h-min rounded-[8px] justify-center text-white font-medium sm:px-6 px-4 sm:py-3 py-2.5 text-center flex items-center gap-2 ${className} normal-case ${
    outline ? "btn-outline" : ""
  } ${btnStyle ? btnStyle : ""} ${
    disabled || isLoading
      ? "opacity-50 cursor-not-allowed"
      : "cursor-pointer"
  }`}
  style={customStyle}
>
  {children}

  {disabled && !isLoading && <FaLock size={14} />}

  {isLoading ? <SpinnerLoader /> : text}
</button>
  );
};

export default Button;
