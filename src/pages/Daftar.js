import { useEffect } from "react";

import DaftarMenu from "../components/akun/user/DaftarMenu";

const Daftar = () => {
  useEffect(() => {
    document.title = "Register";
  }, []);
  return <DaftarMenu />;
};

export default Daftar;
