import create from "zustand";

type CartItem = {
  id: number;
  name: string;
  price: number;
  count: number;
  imageLink: string;
};

type CartStore = {
  cartItems: CartItem[];
  totalPrice: number;
  addToCart: (product: CartItem, count: number) => void;
};

const useStore = create<CartStore>((set) => ({
  cartItems: [],
  totalPrice: 0,
  addToCart: (product, count) => {
    const itemInCartIndex = state.cartItems.findIndex(
      (item) => item.id === product.id
    );
    const newCartItems = [...state.cartItems];
    if (itemInCartIndex >= 0) {
      newCartItems[itemInCartIndex].count += count;
    } else {
      newCartItems.push({
        id: product.id,
        name: product.name,
        price: product.price,
        count: count,
        imageLink: product.imageLink,
      });
    }
    const newTotalPrice = state.totalPrice + product.price * count;
    set({ cartItems: newCartItems, totalPrice: newTotalPrice });
  },
}));

export default useStore;
