import { FaEye } from "react-icons/fa";
import newMembers from "./data";

const NewMembers = () => {
  return (
    <div className="flex-1">
      <h3 className="mb-6 transition-all text-dark-darker dark:text-white">
        مشتریان جدید
      </h3>
      <ul>
        {newMembers.map((member) => {
          return (
            <li
              key={member.id}
              className="flex items-center justify-between gap-4 p-3 mb-4 transition-all bg-white rounded-md shadow-md dark:bg-dark-lighter"
            >
              <img src={member.img} alt="image" className="w-16 rounded-full" />
              <div className="flex flex-col flex-1 gap-1 transition-all text-dark-darker dark:text-white">
                <span>{member.name}</span>
                <span className="text-sm text-gray-400">{member.job}</span>
              </div>
              <button className="px-4 py-3 transition-all rounded-md bg-light-darker dark:bg-dark-main dark:text-white hover:bg-light-main dark:hover:bg-dark-darker ">
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
