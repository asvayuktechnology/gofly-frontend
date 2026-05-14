import React from 'react'
import SpinnerLoader from './Spinner'
export default function Loader() {
    return (
        <div className='w-full flex items-center justify-center'>
            <div className='flex flex-col items-center gap-4 text-white'>
                <SpinnerLoader />
                <span>Please wait...</span>
            </div>
        </div>
    )
}
