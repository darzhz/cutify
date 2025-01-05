import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { SearchIcon } from 'lucide-react'
import { Input } from '@/components/ui/input'

export function Search() {
  const [searchTerm, setSearchTerm] = useState('')
  const router = useRouter()

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    router.push(`/search?q=${encodeURIComponent(searchTerm)}`)
  }

  return (
    <form onSubmit={handleSearch} className="flex items-center">
      <Input
        type="search"
        placeholder="Search products..."
        className="w-full max-w-sm"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button type="submit" className="ml-2 p-2">
        <SearchIcon className="h-4 w-4" />
      </button>
    </form>
  )
}

