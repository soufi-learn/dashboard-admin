import { FaEye } from "react-icons/fa";
import newMembers from "./data";

const NewMembers = () => {
  return (
    <div className="mt-10">
      <h3 className="mb-6 transition-all text-dark-darker dark:text-white">
        مشتریان جدید
      </h3>
      <ul>
        {newMembers.map((member) => {
          return (
            <li className="flex items-center justify-between gap-4 p-3 mb-4 bg-white rounded-md shadow-md">
              <img src={member.img} alt="image" className="w-16 rounded-full" />
              <div className="flex flex-col flex-1 gap-1 transition-all text-dark-darker dark:text-white">
                <span>{member.name}</span>
                <span className="text-sm text-gray-400">{member.job}</span>
              </div>
              <button className="px-4 py-3 transition-all rounded-md bg-light-darker dark:bg-dark-lighter dark:text-white hover:bg-dark-lighter hover:text-white dark:hover:bg-light-lighter dark:hover:text-dark-main">
                <FaEye />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default NewMembers;
