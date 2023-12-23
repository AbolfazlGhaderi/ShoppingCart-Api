
import axios from 'axios'

var productList = []
var orderDetailes =[]
async function getProducts() {
  await axios.get('http://localhost:3000/products').then(result=>{
  productList=JSON.parse(result.data)
  
  }).catch(err=>console.log(err.response.data))
  return  productList
}

async function getOrderDetailsById(id) {
  await axios.get(`http://localhost:3000/orders/${id}`).then(result=>{
    orderDetailes=result.data

  })
  .catch(err=>{
    orderDetailes=err.response.data

  })

  return  orderDetailes
}

function getProductData(id) {
  let productData = productList.find((product) => product.product_id === id)

  return productData
}

export { getProducts, getProductData,getOrderDetailsById }
