
import axios from 'axios'

var productList = []
var orderDetailes =[]
async function getProducts() {
  await axios.get('http://localhost:3000/products').then(result=>{
  productList=JSON.parse(result.data)
  
  }).catch(err=>console.log(err.response.data))
  return  productList
}

async function getOrderByID(id) {
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

var date=''
function getAndSetTime(datein){
  date = new Date(datein)
  date.setSeconds(date.getSeconds() + 0)
  date.setMinutes(date.getMinutes() + 30)
  date.setHours(date.getHours()+ 3)
  return date
  
}

export { getProducts, getProductData,getOrderByID ,getAndSetTime}
