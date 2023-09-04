import { NavLink } from "react-router-dom";
import LoginForm from "./LoginForm";

const LoginMenu = (props) => {
  return (
    <section className="p-3">
      <div className="container mx-auto">
        <div className="md:w-4/5 xl:w-1/3 mx-auto  ">
          <h1 className="font-semibold text-3xl mb-2 text-slate-800">
            Sign In
          </h1>
          <LoginForm />

          <p className="mb-3">
            tidak punya akun?
            <NavLink to="/daftar" className="text-blue-700">
              Buat akun
            </NavLink>
          </p>
          <p>
            Lupa password?
            <NavLink to="/reset-password" className="text-blue-700">
              Reset password
            </NavLink>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LoginMenu;
