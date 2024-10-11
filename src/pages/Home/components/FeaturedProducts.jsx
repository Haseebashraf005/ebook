import { useEffect, useState } from "react"
import { ProductCard } from "../../../components"

export const FeaturedProducts = () => {
  const [featuredProduct, setFeaturedProduct] = useState([])

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch('http://localhost:8000/featured_products');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setFeaturedProduct(data); // Set the product data in the state
      } catch (error) {
        alert(error.message); // Set any errors in the state
      }
    };

    fetchProduct(); // Call the async function
  }, []);

  return (
    <section className="my-20">
      <h1 className="text-2xl text-center font-semibold dark:text-slate-100 mb-5 underline underline-offset-8">Featured eBooks</h1>
      <div className="flex flex-wrap justify-center lg:flex-row">
      
      {
        featuredProduct.map((item)=>(
          <ProductCard key={item.id} item={item} />

        ))
      }
      
       
      </div>
    </section>
  )
}