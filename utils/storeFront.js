
// helpermethod for accesing the storeFront grapQL api
const storeFront = async (query, variables = {}) => {

    
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL,
        {
            method: 'post',
            headers: {
                'Content-Type' : 'application/json',
                'X-Shopify-Storefront-Access-Token': process.env.NEXT_PUBLIC_ACCESS_TOKEN,
            },
            body: JSON.stringify({query, variables}),
        }
    )

    return response.json()
}

export default storeFront
