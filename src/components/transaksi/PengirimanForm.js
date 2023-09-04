import { useEffect, useReducer, useRef, useState } from "react";
import { useHistory } from "react-router-dom";

const namaPelangganReducer = (state, action) => {
  if (action.type === "NAMA_PELANGGAN_INPUT") {
    return {
      valueState: action.valueAction,
      isValid: action.valueAction.length >= 3,
    };
  }
  return namaPelangganReducer;
};

const alamatPelangganReducer = (state, action) => {
  if (action.type === "ALAMAT_PELANGGAN_INPUT") {
    return {
      valueState: action.valueAction,
      isValid: action.valueAction.length >= 5,
    };
  }

  return alamatPelangganReducer;
};

const kotaPelangganReducer = (state, action) => {
  if (action.type === "KOTA_PELANGGAN_INPUT") {
    return {
      valueState: action.valueAction,
      isValid: action.valueAction.length >= 4,
    };
  }

  return kotaPelangganReducer;
};

const kodePosReducer = (state, action) => {
  if (action.type === "KODEPOST_PELANGGAN_INPUT") {
    return {
      valueState: action.valueAction,
      isValid: action.valueAction.length >= 6,
    };
  }

  return kodePosReducer;
};

const PengirimanForm = () => {
  const [formTidakValid, setFormTidakValid] = useState("");
  const namaRef = useRef();
  const alamatRef = useRef();
  const kotaRef = useRef();
  const kodePosRef = useRef();

  const history = useHistory();

  const [namaState, dispatchNama] = useReducer(namaPelangganReducer, {
    valueState: "",
    isValid: null,
  });

  const [alamatState, dispatchAlamat] = useReducer(alamatPelangganReducer, {
    valueState: "",
    isValid: null,
  });

  const [kotaState, dispatchKota] = useReducer(kotaPelangganReducer, {
    valueState: "",
    isValid: null,
  });

  const [kodePosState, dispatchKodePost] = useReducer(kodePosReducer, {
    valueState: "",
    isValid: null,
  });

  const { isValid: namaValid } = namaState;
  const { isValid: alamatValid } = alamatState;
  const { isValid: kotaValid } = kotaState;
  const { isValid: kodePosValid } = kodePosState;

  useEffect(() => {
    const userInfo = {
      namaPenerima: namaState.valueState,
      alamatPenerima: alamatState.valueState,
      kotaPenerima: kotaState.valueState,
      kodePos: kodePosState.valueState,
    };
    localStorage.setItem("infoUser", JSON.stringify(userInfo));
  }, [
    namaState.valueState,
    alamatState.valueState,
    kotaState.valueState,
    kodePosState.valueState,
  ]);

  const namaHandler = () => {
    dispatchNama({
      type: "NAMA_PELANGGAN_INPUT",
      valueAction: namaRef.current.value,
    });
  };

  const alamatHandler = () => {
    dispatchAlamat({
      type: "ALAMAT_PELANGGAN_INPUT",
      valueAction: alamatRef.current.value,
    });
  };

  const kotaHandler = () => {
    dispatchKota({
      type: "KOTA_PELANGGAN_INPUT",
      valueAction: kotaRef.current.value,
    });
  };

  const kodePosHandler = () => {
    dispatchKodePost({
      type: "KODEPOST_PELANGGAN_INPUT",
      valueAction: kodePosRef.current.value,
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (!namaValid || !alamatValid || !kotaValid || !kodePosValid) {
      setFormTidakValid("Form Harus diisi!");
      return;
    }
    history.push("/pembayaran");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="flex flex-col mb-2">
        <label htmlFor="nama-lengkap" className=" my-3">
          Nama lengkap
        </label>
        <input
          type="input"
          id="namalengkap"
          className="border border-solid border-slate-300 py-1 rounded-md"
          ref={namaRef}
          onChange={namaHandler}
        />
        {namaValid === false && (
          <p className="text-red-500 text-sm">Nama harus diisi</p>
        )}
      </div>

      <div className="flex flex-col mb-2">
        <label htmlFor="alamat" className=" my-3">
          Alamat
        </label>
        <input
          type="input"
          id="alamat"
          className="border border-solid border-slate-300 py-1 rounded-md"
          ref={alamatRef}
          onChange={alamatHandler}
        />
        {alamatValid === false && (
          <p className="text-red-500 text-sm">Alamat harus diisi</p>
        )}
      </div>
      <div className="flex flex-col">
        <label htmlFor="kota" className=" my-3">
          Kota
        </label>
        <input
          type="input"
          id="kota"
          className="border border-solid border-slate-300 py-1 rounded-md"
          ref={kotaRef}
          onChange={kotaHandler}
        />
        {kotaValid === false && (
          <p className="text-red-500 text-sm">Kota harus diisi</p>
        )}
      </div>
      <div className="flex flex-col">
        <label htmlFor="kodepos" className=" my-3">
          Kode pos
        </label>
        <input
          type="number"
          id="kodepos"
          className="border border-solid border-slate-300 py-1 rounded-md"
          ref={kodePosRef}
          onChange={kodePosHandler}
        />
        {kodePosValid === false && (
          <p className="text-red-500 text-sm">Kode Pos harus diisi</p>
        )}
      </div>
      <div className="mt-3">
        <p className="text-red-500 text-sm">{formTidakValid}</p>
      </div>
      <button className="bg-[#f0c040] hover:bg-[#e9ba3a] my-3 py-2 px-3 rounded-md  ">
        Lanjutkan
      </button>
    </form>
  );
};

export default PengirimanForm;
