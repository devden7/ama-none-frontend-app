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

  const pageHandle = authCtx.isAuth ? (
    <ProfileMenu
      userName={authCtx.userName}
      userEmail={authCtx.userEmail}
      token={authCtx.token}
    />
  ) : (
    history.push("/login")
  );
  return pageHandle;
};

export default Profile;
