import AddProductForm from "./AddProductForm";
const AddProductPage = (props) => {
  return (
    <section className="p-3">
      <div className="container">
        <div className="md:w-1/2 mx-auto">
          <h1 className="font-semibold text-3xl my-2">Tambahkan Product</h1>
          <AddProductForm token={props.token} />
        </div>
      </div>
    </section>
  );
};

export default AddProductPage;
