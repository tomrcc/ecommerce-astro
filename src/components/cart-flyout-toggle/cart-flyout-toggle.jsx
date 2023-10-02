import { useStore } from '@nanostores/react';
import { isCartOpen } from '../../stores/cartStore';

export default function CartButton({ displayCart }) {
  // read the store value with the `useStore` hook
  const $isCartOpen = useStore(isCartOpen);
  // write to the imported store using `.set`
  if (displayCart === true) {
    return (
      <button
        className="absolute top-5 right-0 z-30 px-5 md:px-10 lg:px-20"
        onClick={() => isCartOpen.set(!$isCartOpen)}
      >
        Cart
      </button>
    );
  }
  return;
}
