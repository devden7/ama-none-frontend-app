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

  const pageHandle =
    authCtx.isAuth && authCtx.isAdmin ? (
      <AdminUsers token={authCtx.token} isAuth={authCtx.isAuth} />
    ) : null;

  if (!authCtx.isAuth || !authCtx.isAdmin) {
    history.push("/");
  }

  return pageHandle;
};

export default Users;
