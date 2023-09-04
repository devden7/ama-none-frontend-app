const ResetPasswordForm = () => {
  return (
    <form>
      <div className="flex flex-col mb-2">
        <label htmlFor="email" className=" my-3">
          Email
        </label>
        <input
          type="email"
          id="email"
          className="border border-solid border-slate-300 py-1 rounded-md"
        />
      </div>
    </form>
  );
};

export default ResetPasswordForm;
