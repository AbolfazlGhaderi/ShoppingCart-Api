
import axios from 'axios'

var productList = []
async function getProducts() {
  await axios.get('http://localhost:3000/products').then(result=>{
  productList=JSON.parse(result.data)
  
  }).catch(err=>console.log(err.response.data))
  return  productList
}

function getProductData(id) {
  let productData = productList.find((product) => product.product_id === id)

  return productData
}

export { getProducts, getProductData }
