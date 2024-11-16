import { Link } from "react-router-dom";
import Chart from "../../components/chart/Chart";

const Product = () => {
  return (
    <div>
      <div className="flex justify-between mt-24">
        <h2>product</h2>
        <Link to="/newProduct">
          <button className="px-4 py-1 text-white transition-all rounded-md bg-dark-lighter dark:bg-light-darker dark:text-dark-main">
            ایجاد
          </button>
        </Link>
      </div>

      <div>
        <div>
          <Chart title='نرخ فروش' />
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default Product;
