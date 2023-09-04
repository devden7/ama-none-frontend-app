import { useState, useReducer, useRef, useContext } from "react";

import ProfileForm from "./ProfileForm";
import AuthContext from "../../../store/auth-context";

const changePasswordReducer = (state, action) => {
  if (action.type === "PASSWORD_CHANGE_INPUT") {
    return {
      valueState: action.valueAction,
      isValid: action.valueAction.length >= 6,
    };
  }

  return changePasswordReducer;
};

const changePasswordRepeatReducer = (state, action) => {
  if (action.type === "PASSWORD_CHANGE_REPEAT_INPUT") {
    return {
      valueState: action.valueAction,
      isValid: action.valueAction === changePasswordReducer.isValid,
    };
  }

  return changePasswordRepeatReducer;
};

const ProfileMenu = (props) => {
  const [passwordMatched, setPasswordMatched] = useState(null);

  const [passwordState, dispatchPassword] = useReducer(changePasswordReducer, {
    valueState: "",
    isValid: null,
  });

  const [passwordRepeatState, dispatchPasswordRepeat] = useReducer(
    changePasswordRepeatReducer,
    {
      valueState: "",
      isValid: null,
    }
  );
  const authCtx = useContext(AuthContext);
  const inputRegisterPasswordRef = useRef();
  const inputRegisterPasswordRepeatRef = useRef();
  const { isValid: passwordValid } = passwordState;
  const registerPasswordHandler = () => {
    dispatchPassword({
      type: "PASSWORD_CHANGE_INPUT",
      valueAction: inputRegisterPasswordRef.current.value,
    });
    console.log(inputRegisterPasswordRef.current.value);
  };

  const registerPasswordRepeatHandler = () => {
    dispatchPasswordRepeat({
      type: "PASSWORD_CHANGE_REPEAT_INPUT",
      valueAction: inputRegisterPasswordRepeatRef.current.value,
    });

    if (
      inputRegisterPasswordRef.current.value ===
      inputRegisterPasswordRepeatRef.current.value
    ) {
      setPasswordMatched(true);
    } else {
      setPasswordMatched(false);
    }
  };

  const submitChangePassword = async (e) => {
    e.preventDefault();
    authCtx.gantiPassword({
      email: props.userEmail,
      newPassword: passwordState.valueState,
      newPasswordRepeat: passwordRepeatState.valueState,
    });
  };

  return (
    <section className="p-3">
      <div className="container mx-auto">
        <div className="md:w-4/5 xl:w-1/3 mx-auto  ">
          <h1 className="font-semibold text-3xl mb-2 text-slate-800">
            User Profile
          </h1>
          <ProfileForm
            userName={props.userName}
            userEmail={props.userEmail}
            passwordRef={inputRegisterPasswordRef}
            passwordRepeatRef={inputRegisterPasswordRepeatRef}
            registerPasswordHandler={registerPasswordHandler}
            registerPasswordRepeatHandler={registerPasswordRepeatHandler}
            submitChangePassword={submitChangePassword}
            passwordMatched={passwordMatched}
            newPasswordErrorMsg={authCtx.newPasswordErrorMsg}
            newRepeatPasswordErrorMsg={authCtx.newRepeatPasswordErrorMsg}
            passwordValid={passwordValid}
          />
        </div>
      </div>
    </section>
  );
};

export default ProfileMenu;
