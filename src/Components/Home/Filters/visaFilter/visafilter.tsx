'use client'

import React, { useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'

import { useVisaCategories } from '@/services/visaService'
import { VisaType } from '@/utils'


const VisaTabFilter = () => {
  const router = useRouter()

  const { data } = useVisaCategories()

  // Country list from API
  const countryOptions = useMemo(() => {
    return (
      data?.data?.map(
        (item: {
          _id: string
          country: string
        }) => item.country
      ) || []
    )
  }, [data])

  // Category list from enum
  const categoryOptions = useMemo(() => {
    return Object.values(VisaType).map((item) =>
      item
        .replace(/_/g, ' ')
        .replace(/\b\w/g, (char) =>
          char.toUpperCase()
        )
    )
  }, [])

  const [country, setCountry] = useState('')
  const [category, setCategory] =
    useState(categoryOptions[0] || '')

  const handleSearch = (
    e: React.FormEvent
  ) => {
    e.preventDefault()

    const params =
      new URLSearchParams()

    if (country)
      params.set('country', country)

    if (category)
      params.set(
        'category',
        category
          .toLowerCase()
          .replace(/ /g, '_')
      )

    router.push(
      `/visa/details/${params.toString()}`
    )
  }

  return (
    <form
      onSubmit={handleSearch}
      className="filter-input show flex flex-wrap gap-4 items-center"
    >
      {/* COUNTRY */}
      <div className="single-search-box">
        <div className="custom-select-dropdown destination-dropdown">
          <select
            value={country}
            onChange={(e) =>
              setCountry(e.target.value)
            }
            className="absolute inset-0 opacity-0 cursor-pointer z-10"
          >
            <option value="">
              Select Country
            </option>

            {countryOptions.map(
              (item: string) => (
                <option
                  key={item}
                  value={item}
                >
                  {item}
                </option>
              )
            )}
          </select>

          <div className="input-field-value">
            <div className="destination">
              <h6>
                {country ||
                  'Select Country'}
              </h6>
              <span>Country</span>
            </div>
          </div>
        </div>
      </div>

      {/* CATEGORY */}
      <div className="single-search-box">
        <div className="custom-select-dropdown destination-dropdown">
          <select
            value={category}
            onChange={(e) =>
              setCategory(e.target.value)
            }
            className="absolute inset-0 opacity-0 cursor-pointer z-10"
          >
            {categoryOptions.map(
              (item) => (
                <option
                  key={item}
                  value={item}
                >
                  {item}
                </option>
              )
            )}
          </select>

          <div className="input-field-value">
            <div className="destination">
              <h6>{category}</h6>
              <span>Category</span>
            </div>
          </div>
        </div>
      </div>

      {/* SEARCH BUTTON */}
      <button
        type="submit"
        className="primary-btn1 ursor-pointer"
      >
        <span>SEARCH</span>
      </button>
    </form>
  )
}

export default VisaTabFilter