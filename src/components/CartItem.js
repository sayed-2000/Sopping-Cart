// import React from 'react'
// import { Button, Stack } from 'react-bootstrap'
// import StoreItmes from '../data/storeItme.json'
// import FormatCurrency from './FromatCurrency';
// import { useSoppingCart } from '../context/ShoppingCartContext';


// function CartItem({id , quantity}) {
//   const {removeItmeFromCart} = useSoppingCart()
//   const itme = StoreItmes.find((i) => i.id === id);
//   if (itme == null) return null;
//   return (
//     <Stack direction='horizontal' gap={2} className='d-flex align-items-center'>
//       <img src={itme.imgUrl} alt="cart-img"
//       style={{width:"125px", height:"75px", objectFit:"cover"}}/>
//       <div className='me-auto'>
//             <div className=''>
//               {itme.name} {" "}
//               {quantity > 1 && (
//                 <span className='text-muted' style={{fontS
//                 :"0.56rem"}}>x {quantity}</span>
//               )}
//             </div>
//             <div className='text-muted' style={{fontS:"0.76rem"}}>
//                   {FormatCurrency(itme.price)}
//             </div>
//        </div>
//             <div> {FormatCurrency(itme.price * quantity)} </div>
//          <Button variant='outline-danger' size='sm' onClick={() => removeItmeFromCart(id)}>
//                 &times;
//          </Button>
//     </Stack>
//   )
// }

// export default CartItem

import React from "react";
import { Stack, Button } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/storeItmes.json";
import FormatCurrency from './FromatCurrency';
const CartItem = ({ id, quantity }) => {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;
  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.imgUrl}
        alt="cart-img"
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>
          {item.name}{" "}
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: "0.65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: "0.75rem" }}>
          {FormatCurrency(item.price)}
        </div>
      </div>
      <div>{FormatCurrency(item.price * quantity)}</div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>
    </Stack>
  );
};

export default CartItem;
