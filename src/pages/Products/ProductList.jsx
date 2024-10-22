import { useEffect, useState } from "react"
import { ProductCard } from "../../components"
import { FilterBar } from "./components/FilterBar"
import { useLocation } from "react-router-dom"
import { useTitle } from "../../hook/useTitle"
import { useFilter } from "../../context"

export const ProductList = () => {

  const { productList , initializeProductList} = useFilter()

  const [showFilterBar, setShowFilterBar] = useState(false)
  const [Products, setProducts] = useState([]) //first we will save the products data in it

  const search = useLocation().search
  const searchTerm = new URLSearchParams(search).get("q")
  // console.log(searchTerm)

  useTitle("E-Books Collections");


  useEffect(() => { 
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:8000/products?name_like=${searchTerm ? searchTerm : ""}`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        
        // setProducts(data); // Set the product data in the state

        initializeProductList(data)
        // setting the products details into state using context reducer

      } catch (error) {
        alert(error.message); // Set any errors in the state
      }
    };

    fetchProduct(); // Call the async function
  }, [searchTerm]);
  return (
    <>
      <section className="my-5">
        <div className="my-5 flex justify-between">
          <span className="text-2xl font-semibold dark:text-slate-100 mb-5">All eBooks ({productList.length})</span>
          <span onClick={() => setShowFilterBar(!showFilterBar)}>
            <button id="dropdownMenuIconButton" data-dropdown-toggle="dropdownDots" className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-900 bg-gray-100 rounded-lg hover:bg-gray-200 dark:text-white dark:bg-gray-600 dark:hover:bg-gray-700" type="button">
              <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z"></path></svg>
            </button>
          </span>
        </div>

        <div className="flex flex-wrap justify-center lg:flex-row">


          {
            productList.map((item) => (

              <ProductCard key={item.id} item={item} />
            ))
          }
        </div>
      </section>
      {
        showFilterBar &&

        <FilterBar setShowFilterBar={setShowFilterBar} />
      }
    </>
  )
}
