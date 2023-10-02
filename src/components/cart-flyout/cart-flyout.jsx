import { useStore } from '@nanostores/react';
import { isCartOpen, cartItems } from '../../stores/cartStore';

export default function CartFlyout() {
  const $isCartOpen = useStore(isCartOpen);
  const $cartItems = useStore(cartItems);
  return $isCartOpen ? (
    <aside className="absolute top-20 z-20 right-5 md:right-10 lg:right-20 bg-slate-500 text-white px-3 py-2 rounded-md">
      {Object.values($cartItems).length ? (
        <ul>
          {Object.values($cartItems).map((cartItem) => (
            <li className="flex gap-2 py-3 px-1 rounded-md">
              <img
                className="max-w-[50px] rounded-md"
                src={cartItem.image.src}
                alt={cartItem.name}
              />
              <div className="">
                <h3>{cartItem.name}</h3>
                <p>Quantity: {cartItem.quantity}</p>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Your cart is empty!</p>
      )}
    </aside>
  ) : null;
}
