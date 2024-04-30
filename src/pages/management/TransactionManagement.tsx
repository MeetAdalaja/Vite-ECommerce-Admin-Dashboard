import { useState } from "react"
import AdminSidebar from "../../components/AdminSidebar"
import { OrderItemType, OrderType } from "../../types"
import { Link } from "react-router-dom";


const img = "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

const orderItems: OrderItemType[] = [
  {
    name: "Puma Shoes",
    photo: img,
    _id: "afdcaaaaaa",
    price: 2000,
    quantity: 4
  }
];



const TransactionManagement = () => {


  const [order, setOrder] = useState<OrderType>({
    name: "Abhishek Singh",
    address: "77 Black Street",
    city: "Nevword",
    state: "Nevada",
    country: "India",
    pinCode: 878676,
    status: "Processing",
    subtotal: 4000,
    discount: 1200,
    shippingCharges: 0,
    tax: 200,
    total: 4000 + 200 + 0 - 1200,
    orderItems,
    _id: "fcjjnjczc"
  });


  const { name, address, city, state, country, pinCode, status, subtotal, discount, shippingCharges, tax, total } = order;

  const updateHandler = () => {
    setOrder((prev) => ({
      ...prev,
      status: prev.status === "Processing" ? "Shipped" : "Delivered",
    }))
  }


  return (
    <div className="admin-container">
      <AdminSidebar />

      <main className="product-management">

        <section>
          <h2>Order Items</h2>

          {
            order.orderItems.map((i) => (
              <ProductCard name={i.name} photo={i.photo} _id={i._id} quantity={i.quantity} price={i.price} />
            ))
          }
        </section>

        <article className="shipping-info-card">
          <h1>Order Info</h1>
          <h5>User Info</h5>
          <p>Name: {name}</p>
          <p>Address: {`${address}, ${city}, ${state}, ${country}, ${pinCode}`}</p>

          <h5>Amount Info</h5>
          <p>Subtotal: {subtotal}</p>
          <p>ShippingCharges: {shippingCharges}</p>
          <p>Tax: {tax}</p>
          <p>Discount: {discount}</p>
          <p>Total: {total}</p>

          <h5>Status Info</h5>
          <p>Status: <span className={status === "Delivered" ? "purple" : status === "Shipped" ? "green" : "red"}>{status}</span></p>
          <button onClick={updateHandler}>Process Status</button>
        </article>
      </main>
    </div>
  )
}


const ProductCard = ({ name, photo, price, quantity, _id }: OrderItemType) => (
  <div className="transaction-product-card">
    <img src={photo} alt={name} />
    <Link to={`/product/${_id}`}>{name}</Link>
    <span>${price} * {quantity} = {price * quantity}</span>
  </div>
)


export default TransactionManagement
