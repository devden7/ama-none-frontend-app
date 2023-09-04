import { Fragment, useContext } from "react";

import CartContext from "../../../store/cart-context";
import DeskripsiProduct from "./DeskripsiProduct";
import SideBarProduct from "./SideBarProduct";

const ProductMedia = (props) => {
  const cartCtx = useContext(CartContext);
  const addToCart = (item) => {
    cartCtx.tambahItem(item);
  };

  return (
    <Fragment>
      <img
        src={props.product.imageUrl}
        alt="buku"
        className="sm:w-80 xl:w-96 m-auto"
      />
      <DeskripsiProduct product={props.product} />
      <SideBarProduct
        id={props.product.id}
        nama={props.product.nama}
        harga={props.product.harga}
        imageUrl={props.product.imageUrl}
        stok={props.product.stok}
        addToCart={addToCart}
      />
    </Fragment>
  );
};

export default ProductMedia;
