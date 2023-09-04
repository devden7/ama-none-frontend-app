import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import AddProductForm from "./AddProductForm";
import Loading from "../../../layout/loading/Loading";

const EditProductPage = () => {
  const [inputNamaEdit, setInputNamaEdit] = useState("");
  const [inputHargaEdit, setInputHargaEdit] = useState("");
  const [inputImageUrlEdit, setInputImageUrlEdit] = useState("");
  const [inputKategoriEdit, setInputKategoriEdit] = useState("");
  const [inputStokEdit, setInputStokEdit] = useState(0);
  const [inputDeskripsiEdit, setInputDeskripsiEdit] = useState("");

  const [loading, setLoading] = useState(null);
  const { Id } = useParams();

  const takeEditProduct = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        "https://amanone-backend-app.vercel.app/product/edit-product/" + Id
      );
      if (response.status !== 200) {
        return;
      }
      const data = await response.json();

      setLoading(false);
      setInputNamaEdit(data.getProductEdit.nama);
      setInputHargaEdit(data.getProductEdit.harga);
      setInputImageUrlEdit(data.getProductEdit.imageUrl);
      setInputKategoriEdit(data.getProductEdit.kategori);
      setInputStokEdit(data.getProductEdit.stok);
      setInputDeskripsiEdit(data.getProductEdit.deskripsi);
    } catch (err) {
      console.log(err);
    }
  };

  const editNamaInputHandler = (namaInput) => {
    setInputNamaEdit(namaInput);
  };

  const editHargaInputHandler = (hargaInput) => {
    setInputHargaEdit(hargaInput);
  };

  const editImageUrlInputHandler = (imageUrlInput) => {
    setInputImageUrlEdit(imageUrlInput);
  };

  const editKategoriInputHandler = (kategoriInput) => {
    setInputKategoriEdit(kategoriInput);
  };

  const editStokInputHandler = (stokInput) => {
    setInputStokEdit(stokInput);
  };

  const editDeskripsiInputHandler = (deskripsiInput) => {
    setInputDeskripsiEdit(deskripsiInput);
  };

  useEffect(() => {
    takeEditProduct();
  }, []);

  return (
    <section className="p-3">
      <div className="container">
        <div className="md:w-1/2 mx-auto">
          <h1 className="font-semibold text-3xl my-2">Edit Product</h1>
          {loading && <Loading />}
          {loading === false && (
            <AddProductForm
              inputNamaEdit={inputNamaEdit}
              inputHargaEdit={inputHargaEdit}
              inputImageUrlEdit={inputImageUrlEdit}
              inputKategoriEdit={inputKategoriEdit}
              inputStokEdit={inputStokEdit}
              inputDeskripsiEdit={inputDeskripsiEdit}
              editNamaInputHandler={editNamaInputHandler}
              editHargaInputHandler={editHargaInputHandler}
              editImageUrlInputHandler={editImageUrlInputHandler}
              editKategoriInputHandler={editKategoriInputHandler}
              editStokInputHandler={editStokInputHandler}
              editDeskripsiInputHandler={editDeskripsiInputHandler}
              params={Id}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default EditProductPage;
