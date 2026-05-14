import React from 'react'
import Image from 'next/image'
export default function NewsAnoucement({ announcement }: { announcement: string }) {
    return (
        <div className="px-4 mt-4">
            <div className="flex items-center gap-4 bg-[#e1e3e8] rounded-full shadow px-3 py-2 ticker-wrapper">
                <div className="flex-shrink-0">
                    <Image width={40} height={40} src="/images/megaphone.svg" alt="News" />
                </div>
                <div className="w-full overflow-hidden">
                    <ul className="ticker w-full flex gap-8">
                        
                            <li className='inline-block mr-14'>
                                <a href="#" className="sm:text-sm text-[12px] text-slate-800 font-semibold hover:underline">
                                    {announcement}
                                </a>
                            </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}
