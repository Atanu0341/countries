import { Country } from '@/types/Country'
import React from 'react'
import CountryCard from './country-card'
import { Card, CardContent, CardHeader } from './ui/card'
import { Skeleton } from './ui/skeleton'

interface CountryListProps {
    countries: Country[]
    searchTerm: string
    loading: boolean
    error: string | null
    handleCountryClick: (country: Country) => void
}

function CountryList({ countries, searchTerm, loading, error, handleCountryClick }: CountryListProps) {

    const filteredCountries = countries.filter((country) => country.name.common.toLowerCase().includes(searchTerm.toLowerCase()))

    if (loading) {
        return (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[...Array(6).map((_, index) => (
                    <Card key={index}>
                        <CardHeader>
                            <Skeleton className='h-4 w-[250px]' />
                        </CardHeader>
                        <CardContent>
                            <Skeleton className="h-[200px] w-full mb-4" />
                            <Skeleton className="h-4 w-[200px] mb-2" />
                            <Skeleton className="h-4 w-[150px] mb-2" />
                            <Skeleton className="h-4 w-[100px]" />
                        </CardContent>
                    </Card>
                ))]}
            </div>
        )
    }

    if(error){
        return <div className='text-center text-red-500'>{error}</div>
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCountries.map((country) => (
                <CountryCard key={country.name.common} country={country} onClick={() => handleCountryClick(country)} />
            ))}
        </div>
    )
}

export default CountryList