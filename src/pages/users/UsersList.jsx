import { useState } from "react";
import usersList from "../../data/usersList";
import { Link } from "react-router-dom";

const Users = () => {
  const [usersData, setUsersData] = useState(usersList);

  const userDelete = (id) => {
    setUsersData(usersData.filter((user) => user.id !== id));
  };

  return (
    <div className="mt-20">
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 rtl:text-right dark:text-gray-400">
          <thead className="uppercase transition-all text-dark-darker bg-light-darker dark:bg-dark-darker dark:text-light-darker">
            <tr>
              <th scope="col" className="px-6 py-3">
                id
              </th>
              <th scope="col" className="px-6 py-3">
                نام کاربر{" "}
              </th>
              <th scope="col" className="px-6 py-3">
                معاملات
              </th>
              <th scope="col" className="px-6 py-3 text-center">
                عملیات
              </th>
            </tr>
          </thead>
          <tbody>
            {usersData.map((user) => (
              <tr
                key={user.id}
                className="transition-all bg-white border-b dark:bg-dark-lighter dark:border-dark-darker"
              >
                <td className="px-6 py-4">{user.id}</td>
                <td className="flex items-center gap-3 px-6 py-4">
                  <img
                    src={user.avatar}
                    alt={user.username}
                    className="w-10 rounded-full"
                  />
                  {user.username}
                </td>
                <td className="px-6 py-4">{user.transactions}</td>
                <td className="px-6 py-4 ">
                  <div className="flex items-center justify-center gap-4">
                    <Link to={`/users/${user.id}`}>
                      <button className="px-4 py-2 text-white transition-all bg-green-500 rounded-md hover:bg-green-600">
                        ادیت
                      </button>
                    </Link>
                    <button
                      onClick={() => userDelete(user.id)}
                      className="px-4 py-2 text-white transition-all bg-red-500 rounded-md hover:bg-red-600"
                    >
                      حذف
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
