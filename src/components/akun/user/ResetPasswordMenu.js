import ResetPasswordForm from "./ResetPasswordForm";

const ResetPasswordMenu = () => {
  return (
    <section className="p-3">
      <div className="container mx-auto">
        <div className="md:w-4/5 xl:w-1/3 mx-auto  ">
          <h1 className="font-semibold text-3xl mb-2 text-slate-800">
            Reset Password
          </h1>
          <ResetPasswordForm />
          <button className="bg-[#f0c040] hover:bg-[#e9ba3a] my-3 py-2 px-3 rounded-md  ">
            Submit
          </button>
        </div>
      </div>
    </section>
  );
};

export default ResetPasswordMenu;
