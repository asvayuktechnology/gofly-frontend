import React from 'react';
import Button from './input/Button';

// import ErrorIcon from "@/assets/img/error-icon-4.png";

import Link from 'next/link';

import Image from 'next/image';
import { IoClose, IoLogOutOutline } from 'react-icons/io5';
interface ModalProps {
  isOpen: boolean;
  title?: string;
  children?: React.ReactNode;
}

interface ToasMessageModalProps {
  isOpen: boolean;
  onClose?: () => void;
  type: 'success' | 'error',
  message?: string
};

interface BlogPostModalProps {
  isOpen: boolean;
  message: string;
  onClose?: () => void;
};

interface LogoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  handleLogout: () => void;
  isLoading?: boolean;
}

interface SupportTicket {
  isOpen: boolean;
  children: React.ReactElement
};

const Modal: React.FC<ModalProps> = ({ isOpen, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed text-center inset-0  bg-opacity-50 flex items-center justify-center z-[9999] overflow-y-auto">
      <div className='relative overflow-y-auto max-h-[90vh] lg:w-1/3 md:w-2/3 w-[90%] h-auto  p-4 bg-[#283884] rounded-md shadow-md flex flex-col items-center'>
        <h1>{title}</h1>
        {children}
      </div>
    </div>
  );
};

export const ToasMessageModal = (props: ToasMessageModalProps) => {
  const { isOpen, onClose, type } = props;
  return (
    <Modal isOpen={isOpen}>
      <div className='w-full flex flex-col items-center gap-6'>
        <Image
  className=""
  src={
    type === "success"
      ? "/assets/img/ok.png"
      : "/assets/img/error-icon-4.png"
  }
  width={50}
  height={50}
  alt="icon"
/>
        <h1 className='text-white text-start'>A confirmation link has been sent to your email. Please check your inbox to continue the registration process.</h1>
        <div className='w-full flex items-center justify-end gap-2'>
          <Link href={'/login'} className='tetx-md text-[#6c757d]'>
            <Button text='Back to login' />
          </Link>
          <Button text='Cancel' className='bg-[#dc3545]  cursor-pointer' disableStyle active={true} onClick={onClose} />
        </div>
      </div>
    </Modal>
  )
};

export const BlogPostModal = (props: BlogPostModalProps) => {
  const { isOpen, message, onClose } = props;
  return (
    <Modal isOpen={isOpen}>
      <div className='w-full flex flex-col items-center gap-6'>
        <p>
          {message}
        </p>
        <Button text='Close' onClick={onClose} />
      </div>
    </Modal>
  )
};


export const LogoutModal = ({
  isOpen,
  onClose,
  handleLogout,
  isLoading,
}: LogoutModalProps) => {

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">

      {/* Modal */}
      <div className="relative w-full max-w-md rounded-2xl bg-white shadow-2xl">

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-black transition"
        >
          <IoClose size={24} />
        </button>

        {/* Content */}
        <div className="p-8 text-center">

          {/* Icon */}
          <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-red-100">
            <IoLogOutOutline className="text-red-600 text-5xl" />
          </div>

          {/* Title */}
          <h2 className="text-2xl font-semibold  text-gray-900">
            Logout?
          </h2>

          {/* Description */}
          <p className="mt-3 text-sm leading-6 text-gray-500">
           Are you sure you want to log out of your account?
          </p>

          {/* Buttons */}
          <div className="mt-8 flex items-center justify-center gap-3">

            <button
              onClick={onClose}
              className="rounded-xl border border-gray-300 px-5 py-3 text-sm  cursor-pointer font-medium text-gray-700 transition hover:bg-gray-100"
            >
              Cancel
            </button>

            <button
              onClick={handleLogout}
              disabled={isLoading}
              className="rounded-xl bg-red-600  cursor-pointer px-5 py-3 text-sm font-medium text-white transition hover:bg-red-700 disabled:opacity-50"
            >
              {isLoading ? "Logging out..." : "Logout"}
            </button>

          </div>
        </div>
      </div>
    </div>
  );
};
export const SuprtTicketModal = (props: SupportTicket) => {
  const { isOpen, children } = props;
  return (
    <Modal isOpen={isOpen}>
      {children}
    </Modal>
  )
};

export default Modal;
