import React, { useState, useEffect } from 'react';
import Layout from '../components/common/Layout';
import Container from '../components/common/Container';
import Row from '../components/common/Row';
import CartItem from '../components/Cart/CartItem';

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  // Simulate fetching cart items from an API or storage
  useEffect(() => {
    // Example: Fetch cart items from an API
    fetch('/api/cart-items')
      .then(response => response.json())
      .then(data => setCartItems(data))
      .catch(error => console.error('Error fetching cart items:', error));
  }, []); // Empty dependency array ensures this runs only once on mount

  return (
    <Layout>
      <Container className="my-[40px]">
        <Row className="mb-[30px] justify-center">
          <h6 className="text-[24px] text-slate-700 font-semibold">
            Cart Details
          </h6>
        </Row>
        <Row className="flex-col mb-[30px]">
          <Row className="h-[40px] bg-gray-400 w-full px-[20px] items-center">
            <h6 className="text-white text-[18px] font-medium w-[20%]">
              Image
            </h6>
            <h6 className="text-white text-[18px] font-medium w-[20%]">
              Title
            </h6>
            <h6 className="text-white text-[18px] font-medium w-[20%]">
              Price
            </h6>
            <h6 className="text-white text-[18px] font-medium w-[20%]">
              Qty
            </h6>
            <h6 className="text-white text-[18px] font-medium w-[20%] text-center">
              Total
            </h6>
          </Row>
          {/* Ensure cartItems is an array before mapping */}
          {cartItems && cartItems.map((item) => (
            <CartItem data={item} key={item._id} />
          ))}
        </Row>
      </Container>
    </Layout>
  );
};

export default Cart;
