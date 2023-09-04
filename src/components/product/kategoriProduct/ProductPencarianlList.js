import ProductPencarianItem from "./ProductPencarianItem";

const ProductPencarian = (props) => {
  return (
    <div className="w-full mb-4">
      <ul className="sm:flex sm:flex-wrap sm:justify-between  sm:gap-x-1 sm:gap-y-4">
        {props.products.map((product) => (
          <ProductPencarianItem
            key={product._id}
            id={product._id}
            product={product}
            addToCart={props.addToCart}
          />
        ))}
      </ul>
    </div>
  );
};

export default ProductPencarian;
