import { useState, useContext } from 'react'

import { Navbar as NavbarBs, Button, Modal } from 'react-bootstrap'
import { BsCart } from 'react-icons/bs'

import { CartContext } from '../context/CartContext'

import CartProduct from './CartProduct'
import axios from 'axios'
function Navbar() {
  const [showModal, setShowModal] = useState(false)

  const cart = useContext(CartContext)

  const productsCount = cart.items.reduce(
    (sum, product) => sum + product.quantity,
    0
  )

  const handleShow = () => {
    setShowModal(true)
  }
  const handleClose = () => {
    setShowModal(false)
  }

  async function checkout() {
    // -------- Calculate the total number of products ---------
    let total = 0;
    cart.items.map(item => {
      total += item.quantity;
    })

    //-----------------------------------------
// console.log({items: cart.items, price: cart.getTotalAmount(), total: total});
    await axios({
      method: 'post',
      url: 'http://localhost:3000/orders',
      data: {
        items: cart.items, price: cart.getTotalAmount(), total: total
      }
    }).then(result => {

      if (result.status==201 && result.data.url) {
       return  window.location.assign(result.data.url)
      }

    }).catch(err=>{
      console.log(err);
    });

  }

  return (
    <>
      <NavbarBs className='border-bottom border-secondary'>
        <NavbarBs.Collapse className='justify-content-end'>
          <Button
            onClick={handleShow}
            variant='btn btn-outline-secondary'
            className='text-white'
          >
            ({productsCount})<BsCart className='mx-2'></BsCart>سبد خرید
          </Button>
        </NavbarBs.Collapse>
      </NavbarBs>
      <Modal
        show={showModal}
        onHide={handleClose}
        contentClassName='card-bg'
        dir='rtl'
      >
        <Modal.Header>
          <Modal.Body>
            {productsCount > 0 ? (
              <>
                <h3 className='mb-4'>سبد خرید</h3>
                {cart.items.map((item) => (
                  <CartProduct
                    key={item.product_id}
                    id={item.product_id}
                    quantity={item.quantity}
                  ></CartProduct>
                ))}
                <h3>مجموع قیمت: {cart.getTotalAmount()}</h3>
              
              <Button className='mt-4' variant='btn btn-light' onClick={checkout}>
              ثبت سفارش
            </Button>
            </>
            ) : (
              <h3>سبد خرید خالی است</h3>
            )}

            <Button
              onClick={handleClose}
              variant='btn btn-outline-secondary'
              className='mt-4 mx-3 text-white'
            >
              بستن
            </Button>
          </Modal.Body>
        </Modal.Header>
      </Modal>
    </>
  )
}

export default Navbar
