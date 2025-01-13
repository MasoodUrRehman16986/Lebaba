function ShopFiltering({
  clearFilters,
  setFiltersState,
  filtersState,
  filters,
}) {
  return (
    <div className="space-y-5 flex-shrink-0">
      <h3>Filters</h3>

      {/* Category Filter */}
      <div className="flex flex-col space-y-2">
        <h4 className="font-medium text-lg">Category</h4>
        <hr />
        {filters.categories.map((category) => (
          <label key={category} className="capitalize cursor-pointer">
            <input
              type="radio"
              value={category}
              checked={filtersState.category === category}
              onChange={(e) =>
                setFiltersState({ ...filtersState, category: e.target.value })
              }
            />
            <span className="ml-1">{category}</span>
          </label>
        ))}
      </div>

      {/* Color Filter */}
      <div className="flex flex-col space-y-2">
        <h4 className="font-medium text-lg">Colors</h4>
        <hr />
        {filters.colors.map((color) => (
          <label key={color} className="capitalize cursor-pointer">
            <input
              type="radio"
              value={color}
              checked={filtersState.color === color}
              onChange={(e) =>
                setFiltersState({ ...filtersState, color: e.target.value })
              }
            />
            <span className="ml-1">{color}</span>
          </label>
        ))}
      </div>

      {/* Price Range Filter */}
      <div className="flex flex-col space-y-2">
        <h4 className="font-medium text-lg">Price Range</h4>
        <hr />
        {filters.priceRanges.map((range) => (
          <label key={range.label} className="capitalize cursor-pointer">
            <input
              type="radio"
              value={`${range.min}-${range.max}`}
              checked={filtersState.priceRange === `${range.min}-${range.max}`}
              onChange={(e) =>
                setFiltersState({ ...filtersState, priceRange: e.target.value })
              }
            />
            <span className="ml-1">{range.label}</span>
          </label>
        ))}
      </div>

      {/* Clear Filters Button */}
      <button
        onClick={clearFilters}
        className="mt-5 bg-red-500 text-white py-2 px-4 rounded"
      >
        Clear Filters
      </button>
    </div>
  );
}

export default ShopFiltering;
