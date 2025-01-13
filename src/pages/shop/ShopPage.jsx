import { useEffect, useState } from "react";
import productsData from "../../data/products.json";
import ProductCards from "./ProductCards";
import ShopFiltering from "./ShopFiltering";

const filters = {
  categories: ["all", "accessories", "dress", "jewellery", "cosmetics"],
  colors: [
    "all",
    "black",
    "blue",
    "green",
    "yellow",
    "gold",
    "silver",
    "beige",
  ],
  priceRanges: [
    { label: "Under $50", min: 0, max: 50 },
    { label: "$50 - $100", min: 50, max: 100 },
    { label: "$100 - $200", min: 100, max: 200 },
    { label: "$200 Above", min: 200, max: Infinity },
  ],
};

const ShopPage = () => {
  const [products, setProducts] = useState(productsData);
  const [filtersState, setFiltersState] = useState({
    category: "all",
    color: "all",
    priceRange: "",
  });

  //   FILTERING FUNCTIONS
  const applyFilter = () => {
    let filteredProducts = productsData;

    if (filtersState.category && filtersState.category !== "all") {
      filteredProducts = filteredProducts.filter(
        (product) => product.category === filtersState.category
      );
    }

    // FILTER BY COLOR
    if (filtersState.color && filtersState.color !== "all") {
      filteredProducts = filteredProducts.filter(
        (product) => product.color === filtersState.color
      );
    }

    // FILTER BY PRICE RANGE
    if (filtersState.priceRange) {
      const [minPrice, maxPrice] = filtersState.priceRange
        .split("-") // Use "-" instead of "_"
        .map(Number);
      filteredProducts = filteredProducts.filter(
        (product) => product.price >= minPrice && product.price <= maxPrice
      );
    }
    setProducts(filteredProducts);
  };

  useEffect(() => {
    applyFilter();
  }, [filtersState]);

  //   CLEAR FILTERS
  const clearFilters = () => {
    setFiltersState({
      category: "all",
      color: "all",
      priceRange: "",
    });
  };

  return (
    <>
      <section className="section__container bg-primary-light">
        <h2 className="section__header capitalize">Well Come To Shop</h2>
        <p className="section__subheader">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod
          blanditiis at eaque ex natus. Facere.
        </p>
      </section>

      <section className="section__container">
        <div className="flex flex-col md:flex-row gap-8">
          {/* LEFT SIDE - Filters */}
          <div className="md:w-1/4 w-full">
            <ShopFiltering
              filters={filters}
              filtersState={filtersState}
              setFiltersState={setFiltersState}
              clearFilters={clearFilters}
            />
          </div>

          {/* RIGHT SIDE - Products */}
          <div className="md:w-3/4 w-full">
            <h3 className="text-xl font-medium mb-4">
              Products Available: {products.length}
            </h3>
            <ProductCards products={products} />
          </div>
        </div>
      </section>
    </>
  );
};

export default ShopPage;
