import { useReducer, useState } from "react";

const ProfileForm = (props) => {
  return (
    <form onSubmit={props.submitChangePassword}>
      <div className="flex flex-col mb-2">
        <label htmlFor="nama" className=" my-3">
          Nama
        </label>
        <input
          type="input"
          id="nama"
          className="border border-solid border-slate-300 py-1 rounded-md"
          value={props.userName}
          disabled
        />
      </div>

      <div className="flex flex-col mb-2">
        <label htmlFor="email" className=" my-3">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="border border-solid border-slate-300 py-1 rounded-md"
          value={props.userEmail}
          disabled
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="password" className=" my-3">
          Password
        </label>
        <input
          type="password"
          id="password"
          className="border border-solid border-slate-300 py-1 rounded-md"
          ref={props.passwordRef}
          onChange={props.registerPasswordHandler}
        />
        {props.passwordValid === false && (
          <p className="text-red-500 text-sm">{props.newPasswordErrorMsg}</p>
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
          ref={props.passwordRepeatRef}
          onChange={props.registerPasswordRepeatHandler}
        />
        {props.passwordMatched === false && (
          <p className="text-red-500 text-sm">
            {props.newRepeatPasswordErrorMsg}
          </p>
        )}
      </div>
      <button className="bg-[#f0c040] hover:bg-[#e9ba3a] my-3 py-2 px-3 rounded-md  ">
        update
      </button>
    </form>
  );
};

export default ProfileForm;
