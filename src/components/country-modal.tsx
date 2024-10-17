import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import Image from "next/image"

interface CountryModalProps {
    country: {
        name: {
            common: string
            official: string
        }
        flags: {
            svg: string
        }
        capital?: string[]
        region: string
        subregion?: string
        population: number
        languages?: { [key: string]: string }
        currencies?: { [key: string]: { name: string; symbol: string } }
        borders?: string[]
    } | null
    isOpen: boolean
    onClose: () => void
}

export default function CountryModal({ country, isOpen, onClose }: CountryModalProps) {
    if (!country) return null

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[425px] dark:bg-black bg-gray-300">
                <DialogHeader>
                    <DialogTitle>{country.name.common}</DialogTitle>
                    <DialogDescription>Detailed information about {country.name.common}</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <Image
                        src={country.flags.svg}
                        alt={`Flag of ${country.name.common}`}
                        width={400}
                        height={160}
                        className="w-full h-40 object-cover rounded"
                    />
                    <div className="grid grid-cols-2 gap-2">
                        <div className="font-semibold">Official Name:</div>
                        <div>{country.name.official}</div>
                        <div className="font-semibold">Capital:</div>
                        <div>{country.capital?.join(", ") || "N/A"}</div>
                        <div className="font-semibold">Region:</div>
                        <div>{country.region}</div>
                        <div className="font-semibold">Subregion:</div>
                        <div>{country.subregion || "N/A"}</div>
                        <div className="font-semibold">Population:</div>
                        <div>{country.population.toLocaleString()}</div>
                        <div className="font-semibold">Languages:</div>
                        <div>{country.languages ? Object.values(country.languages).join(", ") : "N/A"}</div>
                        <div className="font-semibold">Currencies:</div>
                        <div>
                            {country.currencies
                                ? Object.values(country.currencies)
                                    .map((currency) => `${currency.name} (${currency.symbol})`)
                                    .join(", ")
                                : "N/A"}
                        </div>
                        <div className="font-semibold">Borders:</div>
                        <div>{country.borders ? country.borders.join(", ") : "N/A"}</div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}
