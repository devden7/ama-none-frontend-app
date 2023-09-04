import { NavLink } from "react-router-dom";

import DaftarForm from "./DaftarForm";

const DaftarMenu = () => {
  return (
    <section className="p-3">
      <div className="container mx-auto">
        <div className="md:w-4/5 xl:w-1/3 mx-auto  ">
          <h1 className="font-semibold text-3xl mb-2 text-slate-800">
            Sign Up
          </h1>
          <DaftarForm />

          <p className="mb-3">
            Punya Akun?
            <NavLink to="/login" className="text-blue-700">
              <span> </span>Login
            </NavLink>
          </p>
        </div>
      </div>
    </section>
  );
};

export default DaftarMenu;
