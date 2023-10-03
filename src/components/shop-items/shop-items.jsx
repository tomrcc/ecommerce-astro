import AddToCartButton from '../add-to-cart-button/add-to-cart-button';

export default function ShopItems({ shop_items, page_size }) {
  if (shop_items.length > 0) {
    return (
      <section className="grid grid-cols-3 gap-8 py-5 px-5 md:px-10 lg:px-20">
        {shop_items.slice(0, 1).map((shopItem, i) => {
          return (
            <div className="py-5" key={i}>
              <img
                className="rounded-md"
                src={shopItem.image.src}
                alt={shopItem.image.alt}
              />
              <h1 className="py-2">{shopItem.name}</h1>
            </div>
          );
        })}
      </section>
    );
  }
  return;
}
