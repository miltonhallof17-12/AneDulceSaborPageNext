interface CategoryFilterProps {
  selectedCategory: string | null
  onCategoryChange: (category: string | null) => void
}

const categories = [
  { id: 'tentaciones', name: 'Tentaciones', color: 'bg-[#D85C56]' },
  { id: 'postres', name: 'Postres', color: 'bg-[#F26861]' },
  { id: 'tortas', name: 'Tortas', color: 'bg-[#D85C56]' }
]

const CategoryFilter = ({ selectedCategory, onCategoryChange }: CategoryFilterProps) => {
  return (
    <div className="flex flex-wrap justify-center gap-3 mb-8">
      {/* All Products Button */}
      <button
        onClick={() => onCategoryChange(null)}
        className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
          selectedCategory === null
            ? 'bg-[#D85C56] text-white shadow-lg scale-105'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        }`}
      >
        Todos
      </button>
      
      {/* Category Buttons */}
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
            selectedCategory === category.id
              ? `${category.color} text-white shadow-lg scale-105`
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  )
}

export default CategoryFilter
