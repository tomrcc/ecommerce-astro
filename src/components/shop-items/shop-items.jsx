import AddToCartButton from '../add-to-cart-button/add-to-cart-button';

export default function ShopItems({ shop_items }) {
  if (shop_items.length > 0) {
    return (
      <section className="grid grid-cols-3 gap-8 py-5 px-5 md:px-10 lg:px-20">
        {shop_items.map((shopItem, i) => {
          return (
            <div className="py-5" key={i}>
              <a href={`/shop/${shopItem.slug}/`} target="_blank">
                <img
                  className="rounded-md"
                  src={shopItem.data.image.src}
                  alt={shopItem.data.image.alt}
                />
                <h1 className="py-2">{shopItem.data.name}</h1>
              </a>
              <AddToCartButton item={shopItem.data} client:load>
                <button>Add to cart</button>
              </AddToCartButton>
            </div>
          );
        })}
      </section>
    );
  }
  return;
}
