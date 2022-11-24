
import { useState } from "react";
import { useQuery } from "react-query";
import {Item} from "./Item";
import {CartList} from "./CartList";
import imagenCarrito from "../paginaPrincipal/component/img/carrito.svg"


// const GetProducts = async () =>
  // await (await fetch("http://localhost:3000/Comidas")).json();

export const Cart = () =>{
    // const { isLoading, error, data } = useQuery("Comidas", GetProducts);
    const [cartOpen, setCartOpen] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const getTotalItems= (cartItems) =>
        cartItems.reduce((acum, i) => acum + i.amount, 0)

    const handleAddItemToCart = (item) => {
        setCartItems((prev) => {
      // Search the item in the array
        const isItemInTheCart = prev.find((i) => i.id === item.id);
        if (isItemInTheCart) {
            return prev.map((i) =>
            i.id === item.id ? { ...i, amount: i.amount + 1 } : i
            );
        }
        return [...prev, { ...item, amount: 1 }];
        });
  };


    const handleRemoveItemFromCart = (id) => {
        setCartItems((prev) => {
        const foundItem = prev.find((i) => i.id === id);
        if (foundItem) {
            if (foundItem.amount === 1) {
            const newArray = prev.filter((i) => i.id !== id);
            return newArray;
            } else {
            return prev.map((i) =>
                i.id === id ? { ...i, amount: i.amount - 1 } : i
            );
            }
        } else {
            return prev;
        }
        });
  };


  return (
    <>
    <div getTotalItems ={getTotalItems(cartItems)}
        setCartOpen ={setCartOpen}>
           <image src="../paginaPrincipal/component/img/carrito.svg" id='imagenCarrito'> 
          <CartList
            cartItems={cartItems}
            handleAddItemToCart={handleAddItemToCart}
            handleRemoveItemFromCart={handleRemoveItemFromCart}
          />
        </image>
            </div>
    </>
  )


}
