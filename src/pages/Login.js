import { useEffect } from "react";

import LoginMenu from "../components/akun/user/LoginMenu";

const Login = () => {
  useEffect(() => {
    document.title = "Login";
  }, []);
  return <LoginMenu />;
};

export default Login;
