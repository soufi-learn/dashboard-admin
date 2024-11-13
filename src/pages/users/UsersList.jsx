import { useState } from "react";
import usersList from "../../data/usersList";

const Users = () => {
  const [usersData, setUsersData] = useState(usersList);

  return (
    <div className="mt-20">
      <table class="table-fixed">
        <thead>
          <tr></tr>
        </thead>
        <tbody></tbody>
      </table>

      <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead class=" text-dark-darker uppercase bg-light-darker transition-all dark:bg-dark-darker dark:text-light-darker">
            <tr>
              <th scope="col" class="px-6 py-3">
                id
              </th>
              <th scope="col" class="px-6 py-3">
                نام کاربر{" "}
              </th>
              <th scope="col" class="px-6 py-3">
                معاملات
              </th>
              <th scope="col" class="px-6 py-3 text-center">
                عملیات
              </th>
            </tr>
          </thead>
          <tbody>
            {usersData.map((user) => (
              <tr
                key={user.id}
                class="bg-white border-b dark:bg-dark-lighter transition-all dark:border-dark-darker"
              >
                <td class="px-6 py-4">{user.id}</td>
                <td class="px-6 py-4 flex  items-center gap-3">
                  <img
                    src={user.avatar}
                    alt={user.username}
                    className="w-10 rounded-full"
                  />
                  {user.username}
                </td>
                <td class="px-6 py-4">{user.transactions}</td>
                <td class="px-6 py-4 ">
                  <div className="flex items-center justify-center gap-4">
                    <button className="px-4 py-2 text-white transition-all bg-green-500 rounded-md hover:bg-green-600">
                      ادیت
                    </button>
                    <button className="px-4 py-2 text-white transition-all bg-red-500 rounded-md hover:bg-red-600">
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
