import React from 'react'

interface PageTitleProps {
  title: string;
}

const PageTitle: React.FC<PageTitleProps> = ({title}) => {
    return (
        <div className="pagetitle">
            <h1 className='md:text-4xl text-2xl font-medium sm:mb-5 mb-4 text-slate-200'>
                {title}
            </h1>
        </div>
    )
}

export default PageTitle