import Head from 'next/head'

import Footer from "../components/footer"
import Header from "../components/header"
import ProductInfo from "../components/product"
import storeFront from "../utils/storeFront"


const Homepage = ({products}) => {

  console.log(products)
  
  return(
    <div>
      <Head>
        <title>generator.ai</title>
      </Head>
      
      <Header />
      <ProductInfo products={products}/>
      <Footer />
    </div>
  )
}

export const getStaticProps = async() => {
  const { data } = await storeFront(productsQuery)

  return { 
      props: {
          products : data.products
      },
  }
}



const gql = String.raw
const productsQuery = gql`
  query Products {
      products (first:10) {
      pageInfo {
        hasNextPage
        hasPreviousPage
      }
      edges {
          node {
          id
          title
          description
          
          images (first:1) {
              edges {
              node {
                  altText
                  originalSrc
              }
              }
          }
          
          priceRange {
              minVariantPrice {
              amount
              }
          }
          
          }
      }
      }
  }`


export default Homepage