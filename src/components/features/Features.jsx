import { useState } from "react";
import { IoArrowUpOutline, IoArrowDownOutline } from "react-icons/io5";
import { getProfitSign } from "../../helper/helper";

const Features = () => {
  const [featuresList, setFeaturesList] = useState([
    { id: 1, title: "درآمد", price: "۴۸,۶۸۰,۰۰۰", profit: "۲۴.۵ -" },
    { id: 2, title: "درآمد", price: "۴۸,۶۸۰,۰۰۰", profit: "۲۴.۵ +" },
    { id: 3, title: "درآمد", price: "۴۸,۶۸۰,۰۰۰", profit: "۲۴.۵ -" },
  ]);
  return (
    <div className="flex gap-4">
      {featuresList.map((feature) => (
        <section
          key={feature.id}
          className="rounded-md bg-white dark:bg-primary-light p-4 shadow-md transition-all flex-1"
        >
          <span className="mb-3 block text-dark-darker transition-all dark:text-white text-xl">
            {feature.title}
          </span>

          <div className="flex mb-4 items-center">
            <span className="dark:text-light-main transition-all text-xl font-bold me-6">
              {feature.price} تومان
            </span>

            <span className=" dark:text-light-main transition-all me-3">
              {feature.profit}
            </span>

            {getProfitSign(feature.profit) === "-" ? (
              <IoArrowDownOutline
                className="transition-all text-red-500 dark:text-red-400"
                size="1.4rem"
              />
            ) : (
              <IoArrowUpOutline
                className="transition-all text-green-600 dark:text-green-500"
                size="1.4rem"
              />
            )}
          </div>

          <span className="text-sm text-dark-lighter dark:text-light-lighter transition-all">
            نسبت به ماه گذشته
          </span>
        </section>
      ))}
    </div>
  );
};

export default Features;
