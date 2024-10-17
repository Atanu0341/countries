import { Country } from '@/types/Country'
import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from './ui/card'

interface CountryCardProps{
    country: Country
    onClick: () => void
}

export default function CountryCard({country, onClick}: CountryCardProps) {
  return (
    <Card className="cursor-pointer transition-transform hover:scale-105 bg-gray-300 dark:bg-black" onClick={onClick}>
        <CardHeader>
        <CardTitle>{country.name.common}</CardTitle>
      </CardHeader>
      <CardContent>
        <img src={country.flags.svg} alt={`Flag of ${country.name.common}`} className="w-full h-40 object-cover mb-4 rounded" />
        <p>
          <strong>Capital:</strong> {country.capital?.[0] || "N/A"}
        </p>
        <p>
          <strong>Region:</strong> {country.region}
        </p>
        <p>
          <strong>Population:</strong> {country.population.toLocaleString()}
        </p>
      </CardContent>
    </Card>
  )
}
