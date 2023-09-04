import CartItem from "./CartItem";

const CartList = (props) => {
  const tambahQuantity = (item) => {
    props.tambahQuantity(item);
  };

  const kurangQuantity = (id) => {
    props.kurangQuantity(id);
  };

  const hapusItemCart = (id) => {
    props.hapusItemCart(id);
  };

  return (
    <div className=" w-full">
      <ul>
        <ul>
          {props.items.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              nama={item.nama}
              imageUrl={item.imageUrl}
              harga={item.harga}
              quantityItem={item.quantityItem}
              tambahQuantity={tambahQuantity.bind(null, item)}
              kurangQuantity={kurangQuantity.bind(null, item.id)}
              hapusItemCart={hapusItemCart.bind(null, item.id)}
            />
          ))}
        </ul>
      </ul>
    </div>
  );
};

export default CartList;
