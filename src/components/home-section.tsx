'use client'

import React, { useEffect, useState } from 'react'
import SearchBar from './search-bar'
import { Country } from '@/types/Country'
import CountryList from './country-list'
import CountryModal from './country-modal'

function HomeSection() {

    const [countries, setCountries] = useState<Country[]>([])
    const [searchTerm, setSearchTerm] = useState("")
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [selectedCountry, setSelectedCountry] = useState<Country | null>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    useEffect(() => {
        const fetchCountries = async () => {
            try {
                const response = await fetch("https://restcountries.com/v3.1/all")
                if (!response.ok) {
                    throw new Error("Failed to fetch countries")
                }
                const data = await response.json()
                setCountries(data)
                setLoading(false)
            } catch (err) {
                setError("An error occurred while fetching countries.")
                setLoading(false)
            }
        }

        fetchCountries()
    }, [])

    const handleCountryClick = (country: Country) => {
        setSelectedCountry(country)
        console.log(country)
        setIsModalOpen(true)
    }


    return (
        <div>
            <h1 className="text-4xl sm:text-7xl font-bold text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-100 to-neutral-500 dark:from-neutral-300 dark:to-neutral-800 py-8">
                Countries of the World
            </h1>
            <p className="text-center text-lg text-neutral-300 dark:text-neutral-200">
                Explore all the countries!
            </p>

            <div className='px-4 py-4 flex items-center justify-center'>
                <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
            </div>


            <CountryList countries={countries} searchTerm={searchTerm} loading={loading} error={error} handleCountryClick={handleCountryClick} />

            <CountryModal country={selectedCountry} isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />

        </div>
    )
}

export default HomeSection