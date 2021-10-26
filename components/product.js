import phonecase from '../assets/case.png'
import logo from '../assets/logo.svg'
import good from '../assets/check.svg'
import bad from '../assets/x.svg'
import buy from '../assets/buy.svg'
import { useState } from "react"

const ProductInfo = ({products}) => {

    const [currentProductIndex, setIndex] = useState(0)
    const productArray = products.edges

    let length = 0
    productArray.forEach((item, index) => {
        length = index
    })

    const randomIntGenerator = () => {
        return Math.floor(Math.random() * (length+1))
    }

    let currentProduct = productArray[currentProductIndex]
    let productName = currentProduct.node.title
    let price = currentProduct.node.priceRange.minVariantPrice.amount
    let image = currentProduct.node.images.edges[0].node.originalSrc
    let altText = currentProduct.node.images.edges[0].node.altText 

    return(
        <div className='max-w-full px-4 sm:px-6 bg-gradient-to-t from-gray-300 to-red-200'>
        
        <div className='grid h-60 grid-rows-3 grid-flow-col pt-6'>
            <div>
                <p className='font-sans text-lg'>{productName}</p>
                <p className='font-sans text-lg'>DESCRIBED AS RED AND NICE</p>
            </div>

            <div>
                <p className=' font-sans text-lg'>PRICE: {price}€</p>
            </div>

            <div>
                <button className='active:opacity-50'>
                    <img src={buy.src}></img>
                </button>
            </div>
        </div>

        {/* let this be */}
        
        <div className='h-[calc(100vh-(86px+240px))] flex justify-between items-center'>
        
        <div className='inline'>
            <button onClick={() => setIndex(randomIntGenerator())}>
            <img className='h-20 w-20' src={bad.src}></img>
            </button>
        </div>

        <div className='inline'>
            <img className='h-96 w-auto' src={image}></img>
            {/* <img src={phonecase.src}></img> */}
        </div>

        <div className='inline'>
        <button onClick={() => setIndex(randomIntGenerator())}>
            <img className='h-20 w-20' src={good.src}></img>
        </button>
        </div>        

        </div>



        </div>
    )
}


export default ProductInfo

