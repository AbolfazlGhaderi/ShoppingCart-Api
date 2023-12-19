const productList = [
  {
    id: '1',
    title: 'ایرپادز',
    price: 199,
    image: '/images/airpods.jpg',
  },
  {
    id: '2',
    title: 'آیپد',
    price: 499,
    image: '/images/ipad.jpg',
  },
  {
    id: '3',
    title: 'مک‌بوک',
    price: 1999,
    image: '/images/macbook.jpg',
  },
  {
    id: '4',
    title: 'آیفون',
    price: 899,
    image: '/images/phone.jpg',
  },
  {
    id: '5',
    title: 'هدفون',
    price: 599,
    image: '/images/headphone.jpg',
  },
  {
    id: '6',
    title: 'ماوس',
    price: 299,
    image: '/images/mouse.jpg',
  },
  {
    id: '7',
    title: 'اپل واچ',
    price: 499,
    image: '/images/watch.jpg',
  },
  {
    id: '8',
    title: 'میکروفون',
    price: 699,
    image: '/images/mic.jpg',
  },
]

function getProductData(id) {
  let productData = productList.find((product) => product.id === id)

  return productData
}

export { productList, getProductData }
