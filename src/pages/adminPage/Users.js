import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";

import AdminUsers from "../../components/akun/admin/users/AdminUsers";
import AuthContext from "../../store/auth-context";

const Users = () => {
  const authCtx = useContext(AuthContext);
  const history = useHistory();

  useEffect(() => {
    document.title = "Users List";
  }, []);

  const pageHandle = authCtx.isAuth ? (
    <AdminUsers token={authCtx.token} isAuth={authCtx.isAuth} />
  ) : (
    history.push("/login")
  );
  return pageHandle;
};

export default Users;
