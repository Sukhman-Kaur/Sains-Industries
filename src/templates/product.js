import React, { useState } from 'react'
import useFetch from '../hooks/useFetch'
import { Link } from 'react-router-dom'

import Loader from '../components/Loader'

export default function Product({id}) {
    const {response: product, error } = useFetch(`https://course-api.com/react-store-single-product?id=${id}`)

    const [imageIndex, setImageIndex] = useState(0)

    if(!product) return <Loader/>
    if(error) return <div>Error.</div>

    const {  
        images,
        name, description, company
    } = product;

    return(
        <>
            <section>
                <div className="tw-container py-16">
                    <Link to="/products" className="btn-sm bg-blue-500 text-white w-max">Back to Products</Link>
                    <div className="grid lg:grid-cols-2 items-center gap-16 mt-6">
                        <article id="product-photos">
                            <img
                                alt={images[imageIndex].name}
                                className="main-product-image-sm md:main-product-image-md lg:main-product-image bg-gray-300 rounded object-cover w-full"
                                src={images[imageIndex].url}
                            />
                            <div className="mt-4 grid grid-cols-5 gap-4">
                            {
                                images.map((image, i) => (
                                    <img
                                        alt={image.name}
                                        key={image.id}
                                        className={`
                                            bg-gray-300
                                            h-12 md:h-20 w-full object-cover
                                            rounded cursor-pointer 
                                            ${imageIndex === i ? 'border-2 border-blue-500' : ''}
                                        `}
                                        src={image.url}
                                        onClick={() => setImageIndex(i)}
                                    />
                                ))
                            }
                            </div>
                        </article>
                        <article id="product-info" className="capitalize flex flex-col gap-5 lg:gap-4 text-sm md:text-base">
                            <div>
                                <h2 className="font-bold">{name}</h2>
                            </div>
                           <p className="leading-loose">{description}</p>
                            <div className="w-3/5 lg:w-2/5 flex flex-col gap-4">
                                <p className="grid grid-cols-2">
                                    <span className="font-bold">SKU :</span>
                                    {id}
                                </p>
                                <p className="grid grid-cols-2">
                                    <span className="font-bold">Brand :</span>
                                    {company}
                                </p>
                            </div>
                            <hr className="my-4 md:my-6"/>
                        </article>
                    </div>
                </div>
            </section>
        </>
    )
}