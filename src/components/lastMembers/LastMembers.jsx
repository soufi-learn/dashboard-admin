import { useState } from "react";

const LastMembers = () => {
  const getButtonColor = (status) => {
    switch (status) {
      case "approve":
        return "bg-green-200 text-green-700 hover:bg-green-300 hover:text-green-900 transition-all";
      case "decline":
        return "bg-red-200 text-red-700 hover:bg-red-300 hover:text-red-900 transition-all";
      case "pending":
        return "bg-blue-200 text-blue-700 hover:bg-blue-300 hover:text-blue-900 transition-all";
      default:
        return "bg-gray-200 text-gray-700 hover:bg-gray-300 hover:text-gray-900 transition-all";
    }
  };

  const getButtonText = (status) => {
    switch (status) {
      case "approve":
        return "تایید شد";
      case "decline":
        return "رد شد";
      case "pending":
        return "نامعلوم";
    }
  };

  const Button = ({ type }) => {
    return (
      <button className={`px-4 py-1 rounded-md ${getButtonColor(type)}`}>
        {getButtonText(type)}
      </button>
    );
  };

  return (
    <div className="flex-[2]">
      <h3 className="mb-6 transition-all text-dark-darker dark:text-white">
        مشتریان اخیر
      </h3>
      <table className="w-full overflow-hidden bg-white border rounded-md shadow-md">
        <thead className="border">
          <tr>
            <th className="p-2 border">مشتری</th>
            <th className="p-2 border">تاریخ</th>
            <th className="p-2 border">مبلغ</th>
            <th className="p-2 border">وضعیت</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td className="p-2 text-center border">تحسین صوفی زاده</td>
            <td className="p-2 text-center border">۱۳۸۱/۰۹/۲۲</td>
            <td className="p-2 text-center border">۲,۴۸۰,۰۰۰ تومان</td>
            <td className="p-2 text-center border">
              <Button type="approve" />
            </td>
          </tr>
          <tr>
            <td className="p-2 text-center border">تحسین صوفی زاده</td>
            <td className="p-2 text-center border">۱۳۸۱/۰۹/۲۲</td>
            <td className="p-2 text-center border">۲,۴۸۰,۰۰۰ تومان</td>
            <td className="p-2 text-center border">
              <Button type="decline" />
            </td>
          </tr>
          <tr>
            <td className="p-2 text-center border">تحسین صوفی زاده</td>
            <td className="p-2 text-center border">۱۳۸۱/۰۹/۲۲</td>
            <td className="p-2 text-center border">۲,۴۸۰,۰۰۰ تومان</td>
            <td className="p-2 text-center border">
              <Button type="pending" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LastMembers;
