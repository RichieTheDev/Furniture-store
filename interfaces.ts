export interface idprops {
  params: {
    name: string;
    slug: string;
    image: string;
    price: number;
  };
}
export interface props {
  name: string;
  poster: string;
}

export interface CartItem {
  _id: string;
  name: string;
  price: number;
  quantity: number;
  poster: string;
  slug: string;
}

export interface StoreState {
  cart: CartItem[];
  add: (item: CartItem) => void;
  minus: (item: CartItem) => void;
  removeItem: (itemId: string) => void;
  clear: () => void;
}
