import {create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware'

interface CartItem {
  _id: string;
  // Add other properties as needed
  quantity: number;
}

interface StoreState {
  cart: CartItem[];
  add: (item: CartItem) => void;
  minus: (item: CartItem) => void;
  removeItem: (itemId: string) => void;
  clear: () => void;
}

const useStore = create<StoreState>()(persist((set) => ({
  cart: [],
  add: (item) =>
    set((state) => {
      const existingItem = state.cart.find(
        (cartItem) => cartItem._id === item._id
      );
      if (existingItem) {
        existingItem.quantity += 1;
        return { cart: [...state.cart] };
      } else {
        return { cart: [...state.cart, { ...item, quantity: 1 }] };
      }
    }),
  minus: (item) =>
    set((state) => {
      const existingItem = state.cart.find(
        (cartItem) => cartItem._id === item._id
      );
      if (existingItem) {
        const newQuantity = Math.max(existingItem.quantity - 1, 1);
        existingItem.quantity = newQuantity;
        return { cart: [...state.cart] };
      } else {
        return { cart: [...state.cart, { ...item, quantity: 1 }] };
      }
    }),
  removeItem: (itemId) =>
    set((state) => ({
      cart: state.cart.filter((cartItem) => cartItem._id !== itemId),
    })),
  clear: () =>
    set(() => ({
      cart: [],
    })),
}),
{
  name: 'food-storage', // name of the item in the storage (must be unique)
  storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
},
));

export default useStore;
