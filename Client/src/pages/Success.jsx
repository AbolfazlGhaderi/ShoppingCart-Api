import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { getOrderDetailsById } from '../data/items.js'
function Success() {
  const urlParts = window.location.href.split("=");
  const [isLoading, setIsLoading] = useState(true);
  const [isReceived, setIsReceived] = useState(false);
  const [isError, setIsError] = useState(false);
  var [orderList, setOrderList] = useState([])
  useEffect(() => {

    getOrderDetailsById(urlParts[1]).then(result => {
      setIsLoading(false)

        if (result.msg) {
          console.log('Error : '+result.msg);
          return setIsError(true)
        }else if(result.data.length==0){
          
          return setIsReceived(false)
        }
        console.log(result.data);

        setOrderList(result.data)
          setIsReceived(true)
      
    }).catch(err=>{console.log("err");})
  }, [])


  return (

    <div className='d-flex align-items-center justify-content-center flex-column my-4'>

      {isLoading ?
        <div className="spinner-border text-light mb-4" role="status">
          <span className="sr-only"></span></div>
        : null}



      {!isReceived ?
        <div className="alert alert-danger w-100 text-center" role="alert">
          سفارشی یافت نشد
        </div>
        : 
        <div className='text-center w-100'>
          <h2 >سفارش با موفقیت ثبت شد</h2>
        
          <div className='mt-5 mb-5 w-75 m-auto'>
            <table className="table table table-dark table-striped  text-center justify-content-center">
              <thead>
                <tr>

                  <th scope="col">Order ID </th>
                  <th scope="col">Date</th>
                  <th scope="col">Time</th>
                  <th scope="col">Price</th>
                  <th scope="col">Quantity</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">{orderList[0].order_id}</th>
                  <td>{orderList[0].create_date.split('T')[0]}</td>
                  <td>{orderList[0].create_time}</td>
                  <td>${orderList[0].total_amount}</td>
                  <td>{orderList[0].Total}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>}

        {isError ?
        <div className="alert alert-danger w-100 text-center" role="alert">
          خطایی رخ داده است !
        </div>
        : null}

      <Link to='/' className='btn btn-light mt-2'>
        بازگشت به فروشگاه
      </Link>
    </div>
  )
}

export default Success
