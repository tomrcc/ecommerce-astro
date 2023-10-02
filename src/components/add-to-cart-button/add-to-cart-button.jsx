import { addCartItem, isCartOpen } from '../../stores/cartStore';

export default function AddToCartButton({ item }) {
  function addToCart(e) {
    isCartOpen.set(true);
    addCartItem(item);
  }

  return <button onClick={addToCart}>Add to Cart</button>;
}
