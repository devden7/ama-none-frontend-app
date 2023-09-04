import OrderUserList from "./OrderUserList";

const OrderUser = (props) => {
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
      <ul className="flex flex-wrap gap-2 border-[1px] border-solid border-slate-300 p-4 rounded-lg">
        {props.items.map((item) => (
          <OrderUserList
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
    </div>
  );
};

export default OrderUser;
