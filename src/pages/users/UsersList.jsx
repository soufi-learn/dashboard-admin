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
          <thead class="text-xs text-dark-darker uppercase bg-light-darker transition-all dark:bg-dark-darker dark:text-light-darker">
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
              <th scope="col" class="px-6 py-3">
                وضعیت
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
                <td class="px-6 py-4 flex items-center gap-3">
                  <img
                    src={user.avatar}
                    alt={user.username}
                    className="w-10 rounded-full"
                  />
                  {user.username}
                </td>
                <td class="px-6 py-4">{user.transactions}</td>
                <td class="px-6 py-4">{user.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
