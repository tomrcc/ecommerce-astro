import { atom, map } from 'nanostores';

export const isCartOpen = atom(false);

export type CartItem = {
  id: string;
  name: string;
  image: {
    src: string;
    alt: string;
  };
  quantity: number;
};

export const cartItems = map<Record<string, CartItem>>({});

type ItemDisplayInfo = Pick<CartItem, 'id' | 'name' | 'image'>;

export function addCartItem({ id, name, image }: ItemDisplayInfo) {
  const existingEntry = cartItems.get()[id];
  if (existingEntry) {
    cartItems.setKey(id, {
      ...existingEntry,
      quantity: existingEntry.quantity + 1,
    });
  } else {
    cartItems.setKey(id, {
      id,
      name,
      quantity: 1,
      image: {
        src: image.src,
        alt: image.alt,
      },
    });
  }
}
