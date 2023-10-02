import AddToCart from '../add-to-cart/add-to-cart';

export default function ShopItems({ shop_items, grid_size }) {
  return (
    <section class="grid grid-cols-3 gap-8 py-5 px-5 md:px-10 lg:px-20">
      {shop_items.slice(0, grid_size).map((shopItem) => {
        return (
          <div className="py-5">
            <img
              className="rounded-md"
              src={shopItem.image.src}
              alt={shopItem.image.alt}
            />
            <h1 className="py-2">{shopItem.title}</h1>
            <AddToCart item={shopItem} />
          </div>
        );
      })}
    </section>
  );
}
