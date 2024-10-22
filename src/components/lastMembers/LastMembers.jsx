const LastMembers = () => {
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
            <td className="p-2 text-center border">پرداخت شده</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default LastMembers;
