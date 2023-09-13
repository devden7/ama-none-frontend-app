import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";

import LoginMenu from "../components/akun/user/LoginMenu";
import AuthContext from "../store/auth-context";

const Login = () => {
  const history = useHistory();
  const authCtx = useContext(AuthContext);

  useEffect(() => {
    document.title = "Login";
  }, []);

  const pageHandle = !authCtx.isAuth ? <LoginMenu /> : null;

  if (authCtx.isAuth) {
    history.push("/");
  }

  return pageHandle;
};

export default Login;
