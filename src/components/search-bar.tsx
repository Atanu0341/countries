import { Search } from 'lucide-react'
import React from 'react'
import { Input } from './ui/input'

interface SearchBarProps{
    searchTerm: string
    setSearchTerm: (term: string) => void
}

function SearchBar({searchTerm, setSearchTerm}: SearchBarProps) {
    return (
        <div className="relative mb-8 rounded-sm w-4/5">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-300" />
            <Input value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} type="text" placeholder="Search for a country..." className="pl-10 w-full bg-white dark:bg-black dark:text-white" />
        </div>
    )
}

export default SearchBar