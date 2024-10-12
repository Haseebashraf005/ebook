import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { RatingStars } from '../components/Elements/RatingStars';

export const ProductDetail = () => {
    let { id } = useParams()

    const [poroductDetail, setporoductDetail] = useState({})

    useEffect(() => {
        const getProductDetail = async () => {
            try {
                const response = await fetch(`http://localhost:8000/products/${id}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setporoductDetail(data); // Set the product data in the state
            } catch (error) {
                alert(error.message); // Set any errors in the state
            }
        };

        getProductDetail(); // Call the async function
    }, [id]);
    const { name, overview, poster, price, rating, long_description, best_seller, in_stock } = poroductDetail
    // console.log(poroductDetail)

    return (
        <main>
            <section>
                <h1 className="mt-10 mb-5 text-4xl text-center font-bold text-gray-900 dark:text-slate-200">{name}</h1>
                <p className="mb-5 text-lg text-center text-gray-900 dark:text-slate-200">{overview}</p>
                <div className="flex flex-wrap justify-around">
                    <div className="max-w-xl my-3">
                        <img className="rounded" src={poster} alt="" />
                    </div>
                    <div className="max-w-xl my-3">
                        <p className="text-3xl font-bold text-gray-900 dark:text-slate-200">
                            <span className="mr-1">$</span>
                            <span className="">{price}</span>
                        </p>
                        <div className="my-3">
                            <RatingStars rating={rating} />
                            {/* <span>
                                <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
                                <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
                                <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
                                <i className="text-lg bi bi-star-fill text-yellow-500 mr-1"></i>
                                <i className="text-lg bi bi-star text-yellow-500 mr-1"></i>
                            </span> */}
                        </div>
                        <p className="my-4 select-none">
                            {best_seller && <span className="font-semibold text-amber-500 border bg-amber-50 rounded-lg px-3 py-1 mr-2">BEST SELLER</span>}
                            {in_stock && <span className="font-semibold text-emerald-600	border bg-slate-100 rounded-lg px-3 py-1 mr-2">INSTOCK</span>}

                            {!in_stock && <span className="font-semibold text-rose-700 border bg-slate-100 rounded-lg px-3 py-1 mr-2">OUT OF STOCK</span>}
                            <span className="font-semibold text-blue-500 border bg-slate-100 rounded-lg px-3 py-1 mr-2">5 MB</span>
                        </p>
                        <p className="my-3">
                            <button className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800`}>Add To Cart <i className="ml-1 bi bi-plus-lg"></i></button>
                            {/* <button className={`inline-flex items-center py-2 px-5 text-lg font-medium text-center text-white bg-red-600 rounded-lg hover:bg-red-800`}  disabled={ product.in_stock ? "" : "disabled" }>Remove Item <i className="ml-1 bi bi-trash3"></i></button> */}
                        </p>
                        <p className="text-lg text-gray-900 dark:text-slate-200">
                            {long_description}
                        </p>
                    </div>
                </div>
            </section>
        </main>
    )
}
