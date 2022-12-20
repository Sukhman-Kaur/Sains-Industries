import React, { useContext } from 'react'
import ProductPanel from '../components/ProductPanel'
import { StoreContext } from '../context'

export default function Products() {
    const {
        viewGrid, setViewGrid,
        products
    } = useContext(StoreContext)

    return(
        <>
            <section>
                <div className="tw-container py-10 flex flex-col md:flex-row gap-10">
                    <section id="products" className="w-full">
                        <article id="list-header" className={"flex flex-col md:grid md:items-center gap-y-2 gap-x-6"} style={{gridTemplateColumns: 'auto auto 1fr auto'}}>
                            <div className="btn-container">
                                <button 
                                    className={`border border-black rounded w-6 md:w-7 p-1 ${viewGrid ? 'bg-black text-white' : ''}`}
                                    onClick={() => setViewGrid(true)}
                                >
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M1 2.5A1.5 1.5 0 012.5 1h3A1.5 1.5 0 017 2.5v3A1.5 1.5 0 015.5 7h-3A1.5 1.5 0 011 5.5v-3zm8 0A1.5 1.5 0 0110.5 1h3A1.5 1.5 0 0115 2.5v3A1.5 1.5 0 0113.5 7h-3A1.5 1.5 0 019 5.5v-3zm-8 8A1.5 1.5 0 012.5 9h3A1.5 1.5 0 017 10.5v3A1.5 1.5 0 015.5 15h-3A1.5 1.5 0 011 13.5v-3zm8 0A1.5 1.5 0 0110.5 9h3a1.5 1.5 0 011.5 1.5v3a1.5 1.5 0 01-1.5 1.5h-3A1.5 1.5 0 019 13.5v-3z" clipRule="evenodd"></path></svg>
                                </button>
                                <button 
                                    className={`border border-black rounded w-6 md:w-7 p-1 ${!viewGrid ? 'bg-black text-white' : ''}`}
                                    onClick={() => setViewGrid(false)}
                                >
                                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M2.5 11.5A.5.5 0 013 11h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5zm0-4A.5.5 0 013 7h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5zm0-4A.5.5 0 013 3h10a.5.5 0 010 1H3a.5.5 0 01-.5-.5z" clipRule="evenodd"></path></svg>
                                </button>
                            </div>
                            <hr/>
                        </article>
                        <article id="products-list">
                            <div className={`mt-6 ${viewGrid ? "grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8" : ''}`}>
                            {
                                products.map(product => (
                                    <ProductPanel
                                        key={product.id}
                                        {...product}
                                        grid={viewGrid}
                                    />
                                ))
                            }
                            </div>
                        </article>
                    </section>
                </div>
            </section>
        </>
    )
}