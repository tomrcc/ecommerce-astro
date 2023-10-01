import { addItemToCart } from '../../stores/cart';

export default function AddToCart({ item }){
	return (
		<button className="px-8 py-5 bg-gray-500 text-white rounded-md" onClick={() => addItemToCart(item)}>
			Add To Cart
		</button>
	);
};
