import { useState, useRef, useReducer } from "react";
import { useHistory } from "react-router-dom";

const registerNameReducer = (state, action) => {
  if (action.type === "NAMA_REGISTER_INPUT") {
    return {
      valueState: action.valueAction,
      isValid: action.valueAction.length >= 3,
    };
  }
  return registerNameReducer;
};

const registerEmailReducer = (state, action) => {
  if (action.type === "EMAIL_REGISTER_INPUT") {
    return {
      valueState: action.valueAction,
      isValid: action.valueAction.includes("@"),
    };
  }

  return registerEmailReducer;
};

const registerPasswordReducer = (state, action) => {
  if (action.type === "PASSWORD_REGISTER_INPUT") {
    return {
      valueState: action.valueAction,
      isValid: action.valueAction.length >= 6,
    };
  }

  return registerPasswordReducer;
};

const registerPasswordRepeatReducer = (state, action) => {
  if (action.type === "PASSWORD_REGISTER_REPEAT_INPUT") {
    return {
      valueState: action.valueAction,
      isValid: action.valueAction >= 6,
    };
  }

  return registerPasswordRepeatReducer;
};

const DaftarForm = () => {
  const [passwordMatched, setPasswordMatched] = useState(null);
  const [emailIsReady, setEmailIsReady] = useState(null);
  const [namaErrorMsg, setNamaErrorMsg] = useState("");
  const [emailErrorMsg, setEmailErrorMsg] = useState("");
  const [passwordErrorMsg, setPasswordErrorMsg] = useState("");
  const [repeatPasswordErrorMsg, setRepeatPasswordErrorMsg] = useState("");
  const [formTidakValid, setFormTidakValid] = useState("");

  const inputRegisterNamaRef = useRef();
  const inputRegisterEmailRef = useRef();
  const inputRegisterPasswordRef = useRef();
  const inputRegisterPasswordRepeatRef = useRef();

  const history = useHistory();

  const [namaState, dispatchNama] = useReducer(registerNameReducer, {
    valueState: "",
    isValid: null,
  });

  const [emailState, dispatchEmail] = useReducer(registerEmailReducer, {
    valueState: "",
    isValid: null,
  });

  const [PasswordState, dispatchPassword] = useReducer(
    registerPasswordReducer,
    {
      valueState: "",
      isValid: null,
    }
  );

  const [PasswordRepeatState, dispatchPasswordRepeat] = useReducer(
    registerPasswordRepeatReducer,
    {
      valueState: "",
      isValid: null,
    }
  );

  const namaUserHandler = () => {
    dispatchNama({
      type: "NAMA_REGISTER_INPUT",
      valueAction: inputRegisterNamaRef.current.value,
    });
  };

  const emailUserHandler = () => {
    dispatchEmail({
      type: "EMAIL_REGISTER_INPUT",
      valueAction: inputRegisterEmailRef.current.value,
    });
    setEmailIsReady(false);
  };

  const passwordUserHandler = () => {
    dispatchPassword({
      type: "PASSWORD_REGISTER_INPUT",
      valueAction: inputRegisterPasswordRef.current.value,
    });
  };

  const passwordRepeatUserHandler = () => {
    dispatchPasswordRepeat({
      type: "PASSWORD_REGISTER_REPEAT_INPUT",
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

  const { isValid: namaValid } = namaState;
  const { isValid: emailValid } = emailState;
  const { isValid: passwordValid } = PasswordState;

  const signUpBtnHandler = async (e) => {
    e.preventDefault();
    try {
      const user = {
        nama: namaState.valueState,
        email: emailState.valueState,
        password: PasswordState.valueState,
        passwordRepeat: PasswordRepeatState.valueState,
        cart: [],
        role: "users",
      };

      const response = await fetch(
        "https://amanone-backend-app.vercel.app/admin/register",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/JSON",
          },
          body: JSON.stringify(user),
        }
      );

      const data = await response.json();

      if (response.status !== 201) {
        if (!namaValid && !emailValid && !passwordValid && !passwordMatched) {
          setFormTidakValid("Form Harus diisi!");
          return;
        }

        for (let i = 0; i < data.errorValidationMsg.length; i++) {
          if (data.errorValidationMsg[i].param === "nama") {
            setNamaErrorMsg(data.errorValidationMsg[i].msg);
          } else if (data.errorValidationMsg[i].param === "email") {
            if (data.errorValidationMsg[i].msg === "Email sudah digunakan") {
              setEmailIsReady(true);
            }
            setEmailErrorMsg(data.errorValidationMsg[i].msg);
          } else if (data.errorValidationMsg[i].param === "password") {
            setPasswordErrorMsg(data.errorValidationMsg[i].msg);
          } else {
            setRepeatPasswordErrorMsg(data.errorValidationMsg[i].msg);
          }
        }
        return;
      }
      history.push("/login");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <form onSubmit={signUpBtnHandler}>
      <div className="flex flex-col mb-2">
        <label htmlFor="nama" className=" my-3">
          Nama
        </label>
        <input
          type="input"
          id="nama"
          className="border border-solid border-slate-300 py-1 rounded-md"
          ref={inputRegisterNamaRef}
          onChange={namaUserHandler}
        />
        {namaValid === false && (
          <p className="text-red-500 text-sm">{namaErrorMsg}</p>
        )}
      </div>

      <div className="flex flex-col mb-2">
        <label htmlFor="email" className=" my-3">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="border border-solid border-slate-300 py-1 rounded-md"
          ref={inputRegisterEmailRef}
          onChange={emailUserHandler}
        />
        {(emailValid === false || emailIsReady) && (
          <p className="text-red-500 text-sm">{emailErrorMsg}</p>
        )}
      </div>
      <div className="flex flex-col">
        <label htmlFor="password" className=" my-3">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="border border-solid border-slate-300 py-1 rounded-md"
          ref={inputRegisterPasswordRef}
          onChange={passwordUserHandler}
        />
        {passwordValid === false && (
          <p className="text-red-500 text-sm">{passwordErrorMsg}</p>
        )}
      </div>
      <div className="flex flex-col">
        <label htmlFor="ulangi-password" className=" my-3">
          Ulangi Password
        </label>
        <input
          type="password"
          id="ulangi-password"
          className="border border-solid border-slate-300 py-1 rounded-md"
          ref={inputRegisterPasswordRepeatRef}
          onChange={passwordRepeatUserHandler}
        />
        {passwordMatched === false && (
          <p className="text-red-500 text-sm">{repeatPasswordErrorMsg}</p>
        )}
      </div>
      <div className="mt-3">
        <p className="text-red-500 text-sm">{formTidakValid}</p>
      </div>
      <button className="bg-[#f0c040] hover:bg-[#e9ba3a] my-3 py-2 px-3 rounded-md  ">
        Sign Up
      </button>
    </form>
  );
};

export default DaftarForm;
