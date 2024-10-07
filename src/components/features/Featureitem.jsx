import { getProfitSign } from "../../helper/helper";
import { IoArrowUpOutline, IoArrowDownOutline } from "react-icons/io5";

const FeatureItem = ({ feature }) => {
  return (
    <section className="rounded-md bg-white dark:bg-primary-light p-4 shadow-md transition-all flex-1">
      <div className="flex justify-between items-center mb-4">
        <span className="mb-3 block text-dark-darker transition-all dark:text-white text-xl">
          {feature.title}
        </span>
        {getProfitSign(feature.profit) === "-" ? (
          <span className="p-2 rounded-md bg-red-200">
            <IoArrowDownOutline
              className="transition-all text-red-700 "
              size="1.4rem"
            />
          </span>
        ) : (
          <span className="p-2 rounded-md bg-green-200">
            <IoArrowUpOutline
              className="transition-all text-green-800"
              size="1.4rem"
            />
          </span>
        )}
      </div>

      <div className="flex mb-4 items-center justify-between">
        <span className="dark:text-light-main transition-all text-xl font-bold">
          {feature.price} تومان
        </span>

        <span className=" dark:text-light-main transition-all">
          {feature.profit}
        </span>
      </div>

      <span className="text-sm text-dark-lighter dark:text-light-lighter transition-all">
        نسبت به ماه گذشته
      </span>
    </section>
  );
};

export default FeatureItem;
