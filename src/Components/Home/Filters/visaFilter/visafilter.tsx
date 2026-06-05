'use client'

import React, { useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useVisaCategories } from '@/services/visaService'
import { VisaType } from '@/utils'

const VisaTabFilter = () => {
  const router = useRouter()
  const { data } = useVisaCategories()

  // ✅ country list (with ID)
  const countryOptions = useMemo(() => {
    return (
      data?.data?.map((item: any) => ({
        id: item._id,
        country: item.country,
      })) || []
    )
  }, [data])

  // ✅ visa type options
  const categoryOptions = useMemo(() => {
    return Object.values(VisaType).map((item) =>
      item
        .replace(/_/g, ' ')
        .replace(/\b\w/g, (char) => char.toUpperCase())
    )
  }, [])

  const [categoryId, setCategoryId] = useState('')
  const [visaType, setVisaType] = useState(
    categoryOptions[0] || ''
  )

  // ✅ submit handler
  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()

    const params = new URLSearchParams()

    if (categoryId) {
      params.set('categoryId', categoryId)
    }

    if (visaType) {
      params.set(
        'visaType',
        visaType.toLowerCase().replace(/ /g, '_')
      )
    }

    router.push(
      `/visa/details?${params.toString()}`
    )
  }

  return (
    <form
      onSubmit={handleSearch}
      className="filter-input show flex flex-wrap gap-4 items-center"
    >
      {/* COUNTRY / CATEGORY */}
      <div className="single-search-box">
        <div className="custom-select-dropdown destination-dropdown">
          <select
            value={categoryId}
            onChange={(e) => setCategoryId(e.target.value)}
            className="absolute inset-0 opacity-0 cursor-pointer z-10"
          >
            <option value="">Select Country</option>

            {countryOptions.map((item: any) => (
              <option key={item.id} value={item.id}>
                {item.country}
              </option>
            ))}
          </select>

          <div className="input-field-value">
            <div className="destination">
              <h6>
                {countryOptions.find((c: any) => c.id === categoryId)
                  ?.country || 'Select Country'}
              </h6>
              <span>Country</span>
            </div>
          </div>
        </div>
      </div>

      {/* VISA TYPE */}
      <div className="single-search-box">
        <div className="custom-select-dropdown destination-dropdown">
          <select
            value={visaType}
            onChange={(e) => setVisaType(e.target.value)}
            className="absolute inset-0 opacity-0 cursor-pointer z-10"
          >
            
            {categoryOptions.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>

          <div className="input-field-value">
            <div className="destination">
              <h6>{visaType}</h6>
              <span>Visa Type</span>
            </div>
          </div>
        </div>
      </div>

      {/* SEARCH */}
      <button type="submit" className="primary-btn1 cursor-pointer"
         disabled={!categoryId || !countryOptions}>
        <span>SEARCH</span>
      </button>
    </form>
  )
}

export default VisaTabFilter