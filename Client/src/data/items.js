
import axios from 'axios'

var productList = []
async function getProducts() {
  const res = await axios.get('http://localhost:3000/products')
  productList=JSON.parse(res.data)
  return  productList
}

function getProductData(id) {
  let productData = productList.find((product) => product.id === id)

  return productData
}

export { getProducts, getProductData }
