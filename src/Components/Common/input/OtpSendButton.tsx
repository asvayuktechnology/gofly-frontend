'use client';
import React, { useEffect, useState } from 'react';
import Button from './Button';
type ResendOtpButtonProps = {
    initialSeconds?: number;
    onResend: () => void;
    isLoading?: boolean
};

const ResendOtpButton: React.FC<ResendOtpButtonProps> = ({
    initialSeconds = 60,
    onResend,
    isLoading
}) => {
    const [seconds, setSeconds] = useState(initialSeconds);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let interval: NodeJS.Timeout | null = null;

        if (isActive && seconds > 0) {
            interval = setInterval(() => {
                setSeconds((prev) => prev - 1);
            }, 1000);
        } else if (seconds === 0) {
            setIsActive(false);
        }

        return () => {
            if (interval) clearInterval(interval);
        };
    }, [isActive, seconds]);

    const handleClick = () => {
        setSeconds(initialSeconds);
        setIsActive(true);
        onResend();
    };

    return (
        <Button
            text={isActive ? `Resend in ${seconds}s` : 'Send OTP'}
            onClick={handleClick}
            disabled={isActive}
            isLoading={isLoading}
            className='w-full mt-4'
        />
    );
};

export default ResendOtpButton;
