import ProductItem from "./ProductItem";

const ProductList = (props) => {
  return (
    <div>
      <ul className=" flex flex-wrap justify-between  gap-x-1 gap-y-4">
        {props.products.map((product) => (
          <ProductItem
            key={product._id}
            id={product._id}
            nama={product.nama}
            product={product}
            addCart={props.addCart}
          />
        ))}
      </ul>
    </div>
  );
};
export default ProductList;
