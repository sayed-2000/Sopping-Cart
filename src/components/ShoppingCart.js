// import React from 'react'
// import { Offcanvas, Stack } from 'react-bootstrap'
// import { useSoppingCart } from '../context/ShoppingCartContext';
// import CartItem from './CartItem';
// import FormatCurrency from './FromatCurrency';
// import storeItme from '../data/storeItme.json'

// function ShoppingCart({isOpen}) {
//     const {cartItems,closeCart} = useSoppingCart()
//   return (
//     <Offcanvas show={isOpen} onHide={closeCart}  placement='end'>
//         <Offcanvas.Header closeButton>
//          <Offcanvas.Title>Cart</Offcanvas.Title>
//         </Offcanvas.Header>
//         <Offcanvas.Body>
//             <Stack gap={3}>
//                  {cartItems.map((itme) => (
//                 <CartItem key={itme.id} {...itme}/>
//             ))};
//             { FormatCurrency(
//                 cartItems.reduce((total, cartItems) => {
//                   const item = storeItme.find((i) => i.id === cartItems.id);
//                   return total + (item?.price || 0) * cartItems.quantity;
//                 },0)
//               )}
//             </Stack>
//         </Offcanvas.Body>
//     </Offcanvas>
//   );
// };

// export default ShoppingCart

import React from "react";
import { Offcanvas, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import CartItem from "./CartItem";
import FormatCurrency from './FromatCurrency';
import storeItems from "../data/storeItmes.json";

const ShoppingCart = ({ isOpen }) => {
  const { closeCart, cartItems } = useShoppingCart();
  return (
    <Offcanvas show={isOpen} onHide={closeCart} placement="end">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {cartItems.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
          <div className="ms-auto fw-bold fs-5">
            Total{" "}
            {FormatCurrency(
              cartItems.reduce((total, cartItem) => {
                const item = storeItems.find((i) => i.id === cartItem.id);
                return total + (item?.price || 0) * cartItem.quantity;
              }, 0)
            )}
          </div>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShoppingCart;
