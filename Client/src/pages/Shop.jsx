import { Row, Col } from 'react-bootstrap'

import ProductItem from '../components/ProductItem'
import { useEffect, useState } from 'react'
import { getProducts } from '../data/items'

function Shop() {
  var [productList, setProductList] = useState([])
  const [isLoading, setIsLoading] = useState(true);
  const [isReceived, setIsReceived] = useState(true);

  useEffect(() => {
    getProducts().then((res) => {
      setIsLoading(false);
      if (res.msg) {
        setIsReceived(false)
      } else {
        setProductList(res)
      }


    })

  }, [])

  return (


    <div className='text-center mt-3'>
      {isLoading ?
        <div className="spinner-border text-light" role="status">
          <span className="sr-only"></span></div>
        : null}

      {!isReceived ?
        <div className="alert alert-danger" role="alert">
          محصولی یافت نشد 
        </div>
        : null}

      <Row xs={1} md={2} lg={4} className='g-4'>

        {productList.map((item) => (
          <Col align='center' key={item.product_id}>
            <ProductItem product={item} />
          </Col>
        ))}
      </Row>
    </div>


  )
}

export default Shop
