// import {  createContext, useContext, useState } from "react";
// import ShoppingCart from "../components/ShoppingCart";

// const SoppingCartContext = createContext({});


// function ShoppingCartProvider({children}) {
//     const [isOpen, setIsOpen] = useState(false)
//     const [cartItems, setCartItems] = useState([{}]);
      
//     const cartQuantity = cartItems.reduce(
//       (quantity, item) => item.quantity + quantity,
//       0
//     );

//     const openCart = () => {
//       setIsOpen(true)
//     }

//     const closeCart = () => {
//       setIsOpen(false)
//     }

//     const getItemsQuantity = (id) => {
//         return cartItems.find((itme) => itme.id === id)?.quantity || 0;
//     };

//     const increaseCartQuantity = (id) => {
//         setCartItems((currItems) => {
//           if (currItems.find((item) => item.id === id) == null) {
//             return [...currItems, { id, quantity: 1 }];
//           } else {
//             return currItems.map((item) => {
//               if (item.id === id) {
//                 return { ...item, quantity: item.quantity + 1 };
//               } else {
//                 return item;
//               }
//             });
//           }
//         });
//       };

//       const decreaseCartQuantity = (id) => {
//         setCartItems((currItems) => {
//           if (currItems.find((item) => item.id === id)?.quantity === 1) {
//             return currItems.filter((item) => item.id !== id);
//           } else {
//             return currItems.map((item) => {
//               if (item.id === id) {
//                 return { ...item, quantity: item.quantity - 1 };
//               } else {
//                 return item;
//               }
//             });
//           }
//         });
//       };

//       const removeItmeFromCart = (id) => {
//         setCartItems((currItems) => currItems.filter((itme) => itme.id !== id))
//       }


//   return (
//     <SoppingCartContext.Provider value={{
//         cartItems,
//         getItemsQuantity,
//         increaseCartQuantity,
//         decreaseCartQuantity,
//         removeItmeFromCart,
//         openCart,
//         closeCart,
//         cartQuantity,

//     }}>
//         {children}
//         <ShoppingCart isOpen={isOpen}/>
//     </SoppingCartContext.Provider>
//   );
// };

// export default ShoppingCartProvider;

// export const useSoppingCart = () => {
//     return useContext(SoppingCartContext);
// }; 


import { createContext, useContext, useEffect, useState } from "react";
import ShoppingCart from "../components/ShoppingCart";

const ShoppingCartContext = createContext({});
const initialCartItems = localStorage.getItem("shopping-cart")
  ? JSON.parse(localStorage.getItem("shopping-cart"))
  : [];

const ShoppingCartProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [cartItems, setCartItems] = useState(initialCartItems);

  useEffect(() => {
    localStorage.setItem("shopping-cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity + quantity,
    0
  );

  const openCart = () => {
    setIsOpen(true);
  };
  const closeCart = () => {
    setIsOpen(false);
  };
  const getItemQuantity = (id) => {
    return cartItems.find((item) => item.id === id)?.quantity || 0;
  };
  const increaseCartQuantity = (id) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id) == null) {
        return [...currItems, { id, quantity: 1 }];
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const decreaseCartQuantity = (id) => {
    setCartItems((currItems) => {
      if (currItems.find((item) => item.id === id)?.quantity === 1) {
        return currItems.filter((item) => item.id !== id);
      } else {
        return currItems.map((item) => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };
  const removeFromCart = (id) => {
    setCartItems((currItems) => currItems.filter((item) => item.id !== id));
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        getItemQuantity,
        increaseCartQuantity,
        decreaseCartQuantity,
        removeFromCart,
        openCart,
        closeCart,
        cartQuantity,
        cartItems,
      }}
    >
      {children}
      <ShoppingCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  );
};

export default ShoppingCartProvider;
export const useShoppingCart = () => {
  return useContext(ShoppingCartContext);
};
