import { useReducer, useState, useRef, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";

//INIT REDUCER
const namaReducer = (state, action) => {
  if ((action.type = "NAMA_INPUT")) {
    return {
      valueState: action.valueAction,
      isValid: action.valueAction.length > 4,
    };
  }

  return namaReducer;
};

const hargaReducer = (state, action) => {
  if ((action.type = "HARGA_INPUT")) {
    return {
      valueState: action.valueAction,
      isValid: action.valueAction > 999,
    };
  }

  return hargaReducer;
};
const urlReducer = (state, action) => {
  if ((action.type = "URL_PRODUCT_INPUT")) {
    return {
      valueState: action.valueAction,
      isValid: action.valueAction.length > 1,
    };
  }

  return urlReducer;
};
const kategoriReducer = (state, action) => {
  if ((action.type = "KATEGORI_INPUT")) {
    return {
      valueState: action.valueAction,
      isValid: action.valueAction.length > 1,
    };
  }
  return kategoriReducer;
};
const stokReducer = (state, action) => {
  if ((action.type = "STOK_INPUT")) {
    return {
      valueState: action.valueAction,
      isValid: action.valueAction > 0,
    };
  }

  return stokReducer;
};
const deskripsiReducer = (state, action) => {
  if ((action.type = "DESKRIPSI_INPUT")) {
    return {
      valueState: action.valueAction,
      isValid: action.valueAction.length > 10,
    };
  }

  return deskripsiReducer;
};
const AddProductForm = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const [isValid, setIsValid] = useState(false);
  const location = useLocation();
  //DISPATCH STATE
  const [namaState, dispatchNama] = useReducer(namaReducer, {
    valueState: "",
    isValid: null,
  });
  const [hargaState, dispatchHarga] = useReducer(hargaReducer, {
    valueState: 0,
    isValid: null,
  });
  //console.log(props.productEdit.harga);

  const [imageUrlState, dispatchImageUrl] = useReducer(urlReducer, {
    valueState: "",
    isValid: null,
  });
  const [kategoriState, dispatchKategori] = useReducer(kategoriReducer, {
    valueState: "",
    isValid: null,
  });
  const [stokState, dispatchStok] = useReducer(stokReducer, {
    valueState: 0,
    isValid: null,
  });
  const [deskripsiState, dispatchDeskripsi] = useReducer(deskripsiReducer, {
    valueState: "",
    isValid: null,
  });

  //DESTRUCTURING OBJECK VALIDATION
  const { isValid: namaValid } = namaState;
  const { isValid: hargaValid } = hargaState;
  const { isValid: urlValid } = imageUrlState;
  const { isValid: kategoriValid } = kategoriState;
  const { isValid: stokValid } = stokState;
  const { isValid: deskripsiValid } = deskripsiState;

  const history = useHistory();

  useEffect(() => {
    //EDIT INPUT HANDLER
    if (isEditing) {
      //SET EDIT NAMA FORM
      // 1. Render Awal
      dispatchNama({
        type: "NAMA_INPUT",
        valueAction: props.inputNamaEdit,
      });

      //SET EDIT HARGA FORM
      // 1. Render Awal
      dispatchHarga({
        type: "HARGA_INPUT",
        valueAction: props.inputHargaEdit,
      });

      //SET EDIT URLIMAGE FORM
      // 1. Render Awal
      dispatchImageUrl({
        type: "URL_PRODUCT_INPUT",
        valueAction: props.inputImageUrlEdit,
      });

      //SET EDIT KATEGORI FORM
      // 1. Render Awal
      dispatchKategori({
        type: "KATEGORI_INPUT",
        valueAction: props.inputKategoriEdit,
      });

      //SET EDIT STOK FORM
      // 1. Render Awal
      dispatchStok({
        type: "STOK_INPUT",
        valueAction: props.inputStokEdit,
      });

      ///SET EDIT DESKRIPSI FORM
      // 1. Render Awal
      dispatchDeskripsi({
        type: "NAMA_INPUT",
        valueAction: props.inputDeskripsiEdit,
      });
    }
    const getUrl = `/admin/edit-product/${props.params}`;
    if (location.pathname === getUrl) {
      setIsEditing(true);
    } else {
      setIsEditing(false);
    }

    if (
      namaValid &&
      hargaValid &&
      urlValid &&
      kategoriValid &&
      stokValid &&
      deskripsiValid
    ) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [
    namaValid,
    hargaValid,
    urlValid,
    kategoriValid,
    stokValid,
    deskripsiValid,
    isEditing,
    location.pathname,
    props.params,
  ]);
  //USEREFINPUT
  const inputNamaRef = useRef();
  const inputHargaRef = useRef();
  const inputImageUrlRef = useRef();
  const inputKategoriRef = useRef();
  const inputStokRef = useRef();
  const inputDeskripsiRef = useRef();
  //setNamaProduct
  const namaProductHandler = (e) => {
    dispatchNama({
      type: "NAMA_INPUT",
      valueAction: inputNamaRef.current.value,
    });
    if (isEditing) {
      // 2. Jika form NAMA input diedit
      console.log(e.target.value, "from handler");
      props.editNamaInputHandler(e.target.value);
    }
  };
  //setHargaProduct
  const hargaProductHandler = (e) => {
    console.log(inputHargaRef.current.value, "REFFF HARGA");
    dispatchHarga({
      type: "HARGA_INPUT",
      valueAction: inputHargaRef.current.value,
    });

    // .2 Jika form HARGA input diedit
    if (isEditing) {
      props.editHargaInputHandler(e.target.value);
    }
  };

  //setUrlProduct
  const urlProductHandler = (e) => {
    dispatchImageUrl({
      type: "URL_PRODUCT_INPUT",
      valueAction: inputImageUrlRef.current.value,
    });

    // 2. Jika form IMAGEURL input diedit
    if (isEditing) {
      props.editImageUrlInputHandler(e.target.value);
    }
  };
  //setKategoriProduct
  const kategoriProductHandler = (e) => {
    dispatchKategori({
      type: "KATEGORI_INPUT",
      valueAction: inputKategoriRef.current.value,
    });

    // 2. Jika form KATEGORI input diedit
    if (isEditing) {
      props.editKategoriInputHandler(e.target.value);
    }
  };

  //setStokProduct
  const stokProductHandler = (e) => {
    dispatchStok({
      type: "STOK_INPUT",
      valueAction: inputStokRef.current.value,
    });
    // 2. Jika form STOK input diedit
    if (isEditing) {
      props.editStokInputHandler(e.target.value);
    }
  };
  //setDeskripsiProduct
  const deskripsiProductHandler = (e) => {
    dispatchDeskripsi({
      type: "NAMA_INPUT",
      valueAction: inputDeskripsiRef.current.value,
    });

    // 2. Jika form STOK input diedit
    if (isEditing) {
      props.editDeskripsiInputHandler(e.target.value);
    }
  };

  //MENGIRIM PRODUCT KE BACKEND
  const addProductHandler = async (e) => {
    e.preventDefault();
    console.log(+hargaState.valueState);
    // validation
    const product = {
      nama: namaState.valueState,
      harga: +hargaState.valueState,
      imageUrl: imageUrlState.valueState,
      kategori: kategoriState.valueState,
      stok: stokState.valueState,
      deskripsi: deskripsiState.valueState,
      review: [],
      rating: 0,
      createdAt: new Date(),
    };
    try {
      // EDIT PRODUCT
      if (isValid) {
        const urlEndPoint = isEditing
          ? `https://amanone-backend-app.vercel.app/admin/edit-product/${props.params}`
          : "https://amanone-backend-app.vercel.app/admin/add-product";

        const method = !isEditing ? "POST" : "PUT";

        // ADD-PRODUCT
        const response = fetch(urlEndPoint, {
          method: method,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${props.token}`,
          },
          body: JSON.stringify(product),
        });

        const data = await response;
        if (response.status !== 201) {
          return;
        }
      } else {
        if (!namaValid) {
          console.log("NAMA tidak VALID");
          inputNamaRef.current.focus();
        } else if (!hargaValid) {
          inputHargaRef.current.focus();
        } else if (!urlValid) {
          inputImageUrlRef.current.focus();
        } else if (!kategoriValid) {
          inputKategoriRef.current.focus();
        } else if (!stokValid) {
          inputStokRef.current.focus();
        } else {
          inputDeskripsiRef.current.focus();
        }
        return;
      }
    } catch (err) {
      console.log(err);
    }
    history.push("/");
  };

  return (
    <form onSubmit={addProductHandler}>
      <div className="flex flex-col mb-2">
        <label htmlFor="nama" className=" my-3">
          Nama Product
        </label>
        <input
          type="input"
          id="nama"
          className={`${
            namaValid === false
              ? "px-2 border border-solid border-red-300 py-1 rounded-md  focus:outline-red-500"
              : "px-2 border border-solid border-slate-300 py-1 rounded-md  "
          }`}
          onChange={namaProductHandler}
          ref={inputNamaRef}
          defaultValue={isEditing ? props.inputNamaEdit : ""}
        />
        {namaValid === false && (
          <p className="text-red-500 text-sm">Minimal 5 karakter</p>
        )}
      </div>
      <div className="flex flex-col">
        <label htmlFor="harga" className=" my-3">
          Harga
        </label>
        <input
          type="number"
          onKeyDown={(e) => {
            ["e", "E", "+", "-"].includes(e.key) && e.preventDefault();
          }}
          id="harga"
          className={`${
            hargaValid === false
              ? "px-2 border border-solid border-red-300 py-1 rounded-md  focus:outline-red-500"
              : "px-2 border border-solid border-slate-300 py-1 rounded-md"
          }`}
          ref={inputHargaRef}
          defaultValue={isEditing ? props.inputHargaEdit : ""}
          onChange={hargaProductHandler}
        />
        {hargaValid === false && (
          <p className="text-red-500 text-sm">Harga minimal 1000</p>
        )}
      </div>

      <div className="flex flex-col mb-2">
        <label htmlFor="imageUrl" className=" my-3">
          Masukan Url Gambar
        </label>
        <input
          type="input"
          id="imageUrl"
          className={`${
            urlValid === false
              ? "px-2 border border-solid border-red-300 py-1 rounded-md  focus:outline-red-500"
              : "px-2 border border-solid border-slate-300 py-1 rounded-md  "
          }`}
          onChange={urlProductHandler}
          ref={inputImageUrlRef}
          defaultValue={isEditing ? props.inputImageUrlEdit : ""}
        />
        {urlValid === false && (
          <p className="text-red-500 text-sm">Masukan URL</p>
        )}
      </div>

      <div className="flex flex-col mb-2">
        <label htmlFor="kategori" className=" my-3">
          Kategori
        </label>
        <input
          type="input"
          id="kategori"
          className={`${
            kategoriValid === false
              ? "px-2 border border-solid border-red-300 py-1 rounded-md  focus:outline-red-500"
              : "px-2 border border-solid border-slate-300 py-1 rounded-md  "
          }`}
          onChange={kategoriProductHandler}
          ref={inputKategoriRef}
          defaultValue={isEditing ? props.inputKategoriEdit : ""}
        />
        {kategoriValid === false && (
          <p className="text-red-500 text-sm">Masukan kategori</p>
        )}
      </div>

      <div className="flex flex-col mb-2">
        <label htmlFor="stok" className=" my-3">
          Stok
        </label>
        <input
          type="number"
          id="stok"
          className={`${
            stokValid === false
              ? "px-2 border border-solid border-red-300 py-1 rounded-md  focus:outline-red-500"
              : "px-2 border border-solid border-slate-300 py-1 rounded-md  "
          }`}
          onChange={stokProductHandler}
          ref={inputStokRef}
          defaultValue={isEditing ? props.inputStokEdit : ""}
        />
        {stokValid === false && (
          <p className="text-red-500 text-sm">Isi stok minimal 1</p>
        )}
      </div>

      <div className="flex flex-col mb-2">
        <label htmlFor="deskripsi" className=" my-3">
          Deskripsi
        </label>
        <input
          type="input"
          id="deskripsi"
          className={`${
            deskripsiValid === false
              ? "px-2 border border-solid border-red-300 py-1 rounded-md  focus:outline-red-500"
              : "px-2 border border-solid border-slate-300 py-1 rounded-md  "
          }`}
          onChange={deskripsiProductHandler}
          ref={inputDeskripsiRef}
          defaultValue={isEditing ? props.inputDeskripsiEdit : ""}
        />
        {deskripsiValid === false && (
          <p className="text-red-500 text-sm">Masukan deskripsi</p>
        )}
      </div>
      <button className="bg-[#f0c040] hover:bg-[#e9ba3a] my-2 p-2 rounded-md">
        Tambah
      </button>
    </form>
  );
};

export default AddProductForm;
