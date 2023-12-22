import { Link } from 'react-router-dom'

function Success() {
  console.log(window.location.href.split("="));


  return (
    <div className='d-flex align-items-center justify-content-center flex-column my-4'>
      <h2>سفارش با موفقیت ثبت شد</h2>
      <div className='mt-5 mb-5 w-50'>
        <table className="table table table-dark table-striped  text-center">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td >Larry the Bird</td>
              <td >Larry the Bird</td>

              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
      <Link to='/' className='btn btn-light mt-2'>
        بازگشت به فروشگاه
      </Link>
    </div>
  )
}

export default Success
