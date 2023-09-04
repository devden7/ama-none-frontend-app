import { useState, useRef, useContext } from "react";

import AuthContext from "../../../store/auth-context";

const LoginForm = (props) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isError, setIsError] = useState(null);

  const AuthCtx = useContext(AuthContext);

  const emailRef = useRef();
  const passwordRef = useRef();

  const emailHandler = () => {
    setEmail(emailRef.current.value);
  };

  const passwordHandler = () => {
    setPassword(passwordRef.current.value);
  };

  const loginFormHandler = (e) => {
    e.preventDefault();
    const loginUser = {
      email: email,
      password: password,
    };

    if (AuthCtx.httpStatus !== 200) {
      setIsError(true);
    } else {
      setIsError(false);
    }

    AuthCtx.loginHandler(e, loginUser);
  };

  return (
    <form onSubmit={loginFormHandler}>
      <div className="flex flex-col mb-2">
        <label htmlFor="email" className=" my-3">
          Email
        </label>
        <input
          type="email"
          id="email"
          className={`border border-solid ${
            AuthCtx.errorMassage === "Silahkan masukan email" ||
            AuthCtx.errorMassage === "Email Tidak ditemukan"
              ? "border-red-500"
              : "border-slate-300"
          } py-1 rounded-md`}
          ref={emailRef}
          onChange={emailHandler}
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="password" className=" my-3">
          Password
        </label>
        <input
          type="password"
          id="password"
          className={`border border-solid ${
            AuthCtx.errorMassage === "Silahkan masukan password" ||
            AuthCtx.errorMassage === "Password salah"
              ? "border-red-500"
              : "border-slate-300"
          } py-1 rounded-md`}
          ref={passwordRef}
          onChange={passwordHandler}
        />
      </div>
      {isError && AuthCtx.errorMassage !== "login sukses" && (
        <p className="text-red-500 text-sm pt-2">{AuthCtx.errorMassage}</p>
      )}
      <button className="bg-[#f0c040] hover:bg-[#e9ba3a] my-3 py-2 px-3 rounded-md  ">
        Sign In
      </button>
    </form>
  );
};

export default LoginForm;
