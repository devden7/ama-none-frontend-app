import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";

import DashboardMenu from "../../components/akun/admin/dashboard/DashboardMenu";
import AuthContext from "../../store/auth-context";

const Dashboard = () => {
  const authCtx = useContext(AuthContext);
  const history = useHistory();

  useEffect(() => {
    document.title = "Dashboard";
  }, []);

  const pageHandle = authCtx.isAuth ? (
    <DashboardMenu token={authCtx.token} isAuth={authCtx.isAuth} />
  ) : (
    history.push("/login")
  );
  return pageHandle;
};

export default Dashboard;
