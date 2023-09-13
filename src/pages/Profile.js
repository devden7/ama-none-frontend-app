import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";

import ProfileMenu from "../components/akun/user/ProfileMenu";
import AuthContext from "../store/auth-context";

const Profile = () => {
  const authCtx = useContext(AuthContext);
  const history = useHistory();
  useEffect(() => {
    document.title = "Profile";
  }, []);

  const pageHandle =
    authCtx.isAuth && !authCtx.isAdmin ? (
      <ProfileMenu
        userName={authCtx.userName}
        userEmail={authCtx.userEmail}
        token={authCtx.token}
      />
    ) : null;

  if (!authCtx.isAuth || authCtx.isAdmin) {
    history.push("/");
  }

  return pageHandle;
};

export default Profile;
