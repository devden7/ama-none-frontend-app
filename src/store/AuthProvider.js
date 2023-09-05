import { useState } from "react";
import { useHistory } from "react-router-dom";

import AuthContext from "./auth-context";

const AuthProvider = (props) => {
  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [token, setToken] = useState(null);
  const [isAuth, setIsAuth] = useState(null);
  const [isAdmin, setIsAdmin] = useState(null);
  const [errorMassage, setErrorMessage] = useState("");
  const [httpStatus, setHttpStatus] = useState();
  const [newPasswordErrorMsg, setNewPasswordErrorMsg] = useState("");
  const [newRepeatPasswordErrorMsg, setNewRepeatPasswordErrorMsg] =
    useState("");
  const history = useHistory();

  const loginHandler = async (e, dataLogin) => {
    e.preventDefault();

    const response = await fetch(
      "https://amanone-backend-app.vercel.app/admin/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/JSON",
        },
        body: JSON.stringify(dataLogin),
      }
    );

    const data = await response.json();

    if (response.status !== 200) {
      setErrorMessage(data.message);
      setHttpStatus(response.status);
      return;
    } else {
      setErrorMessage(data.message);
    }

    setToken(data.detailInfo.token);
    setUserId(data.detailInfo.userId);
    setUserName(data.detailInfo.userName);
    setUserEmail(data.detailInfo.email);

    if (data.detailInfo.role === "admin") {
      setIsAdmin(true);
    } else {
      setIsAdmin(false);
    }

    setIsAuth(true);
    history.push("/");
  };

  const logoutHandler = () => {
    setToken(null);
    setIsAuth(false);
    setUserId("");
    setUserName("");
    setUserEmail("");
    history.push("/");
  };

  const gantiPassword = async (dataAkun) => {
    try {
      const response = await fetch(
        "https://amanone-backend-app.vercel.app/admin/ganti-password",
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",

            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify(dataAkun),
        }
      );

      const data = await response.json();

      if (response.status !== 201) {
        for (let i = 0; i < data.errorValidationMsg.length; i++) {
          if (data.errorValidationMsg[i].param === "newPassword") {
            setNewPasswordErrorMsg(data.errorValidationMsg[i].msg);
          } else {
            setNewRepeatPasswordErrorMsg(data.errorValidationMsg[i].msg);
          }
        }
        return;
      }
    } catch (err) {
      console.log(err);
    }
  };

  const authValue = {
    userId,
    userName,
    userEmail,
    token,
    isAuth,
    isAdmin,
    httpStatus,
    errorMassage,
    newPasswordErrorMsg,
    newRepeatPasswordErrorMsg,
    loginHandler,
    logoutHandler,
    gantiPassword,
  };

  return (
    <AuthContext.Provider value={authValue}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
