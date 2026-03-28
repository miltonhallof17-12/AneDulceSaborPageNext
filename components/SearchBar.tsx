interface SearchBarProps {
  searchTerm: string
  setSearchTerm: (term: string) => void
  isVisible: boolean
}

const SearchBar = ({ searchTerm, setSearchTerm, isVisible }: SearchBarProps) => {
  return (
    <section 
      className={`container mx-auto py-8 transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
    >
      <div className="flex justify-center">
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="BUSCAR"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 pr-12 rounded-full border-2 border-[#D85C56] focus:outline-none focus:border-[#D85C56]"
          />
          <button className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-[#D85C56] hover:bg-[#D85C56] text-white p-2 rounded-full transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default SearchBar
