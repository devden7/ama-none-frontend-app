import { useState, useEffect } from "react";

import UsersList from "./UsersList";
import Loading from "../../../layout/loading/Loading";

const AdminUsers = (props) => {
  const [userList, setUserList] = useState();
  const [loading, setLoading] = useState(null);
  const getUser = async () => {
    setLoading(true);
    const response = await fetch(
      "https://amanone-backend-app.vercel.app/admin/get-all-user",
      {
        headers: {
          Authorization: `Bearer ${props.token}`,
        },
      }
    );
    if (response.status !== 200) {
      return;
    }
    const data = await response.json();
    setUserList(data.userList);
    setLoading(false);
  };

  useEffect(() => {
    getUser();
  }, []);

  const deleteUserHandler = async (id) => {
    const response = await fetch(
      "https://amanone-backend-app.vercel.app/admin/delete-user/" + id,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${props.token}`,
        },
      }
    );
    if (response.status !== 201) {
      return;
    }
    const data = await response.json();

    if (response.status !== 200) {
      console.log(data.message);
      return;
    }

    const updateUser = userList.filter((user) => user._id !== id);
    setUserList(updateUser);
  };

  return (
    <section className="p-3">
      <div className="container">
        {loading && <Loading />}
        {loading === false && (
          <div>
            <h1 className="font-semibold text-3xl my-2">Users</h1>
            {userList.length === 0 ? (
              <p>tidak ada users</p>
            ) : (
              <table className="table-auto w-full text-left border-b-[1px] border-solid border-slate-300 p-3">
                <thead className="border-b-[1px] border-solid border-slate-300 my-3 ">
                  <tr className="p-5">
                    <th className="pr-2">ID</th>
                    <th className="pr-2">NAMA</th>
                    <th className="pr-2">Email</th>
                    <th className="pr-2">SESUAIKAN</th>
                  </tr>
                </thead>
                {userList?.map((user) => (
                  <UsersList
                    key={user._id}
                    id={user._id}
                    nama={user.nama}
                    email={user.email}
                    deleteUserHandler={deleteUserHandler.bind(null, user._id)}
                  />
                ))}
              </table>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default AdminUsers;
