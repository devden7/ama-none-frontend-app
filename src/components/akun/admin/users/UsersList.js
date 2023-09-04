const UsersList = (props) => {
  const deleteBtnHandler = () => {
    props.deleteUserHandler();
  };
  return (
    <tbody>
      <tr className="border-b-[1px] border-solid border-slate-300 m-3">
        <td className="pr-2">{props.id}</td>
        <td className="pr-2">{props.nama}</td>
        <td className="pr-2">{props.email}</td>
        <td className="pr-2">
          <button
            onClick={deleteBtnHandler}
            className="p-2 bg-slate-50 rounded-lg hover:bg-slate-200 transition duration-150"
          >
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default UsersList;
