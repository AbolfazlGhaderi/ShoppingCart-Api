import { Row, Col } from 'react-bootstrap'

import ProductItem from '../components/ProductItem'
import { useEffect,useState } from 'react'
import { getProducts } from '../data/items'

function Shop() {
   var [productList, setProductList] = useState([])
  useEffect(() => {
    getProducts().then((res)=>{
    
      setProductList(res)

    })
    
  },[])
  
  return (

    
    <Row xs={1} md={2} lg={4} className='g-4'>
      {productList.map((item) => (
        <Col align='center' key={item.id}>
          <ProductItem product={item} />
        </Col>
      ))}
    </Row>


  )
}

export default Shop
